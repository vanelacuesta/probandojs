const url = `https://dummyjson.com/products`;
let agregadosAlCarrito = [];

const updateCart = () => {
    const listaCarrito = document.querySelector("#lista-carrito");
    listaCarrito.innerHTML = "";
    
    let total = 0;

    agregadosAlCarrito.forEach(producto => {
        const subtotal = producto.price * producto.cantidad;
        const li = document.createElement("li");
        li.textContent = `${producto.title} - $${producto.price} x ${producto.cantidad} = $${subtotal.toFixed(2)}`; 
        listaCarrito.appendChild(li);
        total += subtotal;
    });

    const totalElement = document.createElement("li");
    totalElement.style.fontWeight = "bold";
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    listaCarrito.appendChild(totalElement);
};

const cardsAHtml = data => {
    const cards = data.reduce((acc, elemento) => acc + `
            <div id="producto-${elemento.id}" class="card">
                <div class="container-img">
                    <img src=${elemento.images[0] || "./img/not-found.jpg" } alt=${elemento.title}>
                </div>
                <h2>${elemento.title}</h2>
                <div class="precio">$${elemento.price}</div> 
                <button class="button-card" id="button-${elemento.id}">
                    <i class="fas fa-shopping-cart button-card" id="button-${elemento.id}"></i>
                </button>
            </div>
        `, "");

    document.querySelector("#productos-container").innerHTML = cards;
    return document.querySelectorAll(".button-card");
};

const changeImageOnHover = (data) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const img = card.querySelector('img');
        const originalImage = img.src;
        const hoverImage = data[index].images[1] || data[index].images[0];
        card.addEventListener('mouseenter', () => img.src = hoverImage);
        card.addEventListener('mouseleave', () => img.src = originalImage);
    });
};

const eventoCards = (nodos, array) => {
    nodos.forEach(nodo => {
        nodo.onclick = (e) => {
            const id = e.currentTarget.id.slice(7);
            const buscarProducto = array.find(element => element.id === Number(id));
            const productoEnCarrito = agregadosAlCarrito.find(p => p.id === buscarProducto.id);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1;
            } else {
                buscarProducto.cantidad = 1;
                agregadosAlCarrito.push(buscarProducto);
            }

            localStorage.setItem("productos", JSON.stringify(agregadosAlCarrito));
            updateCart();
            Toastify({
                text: `¡Se ha añadido ${buscarProducto.title} a tu carrito!`,
                duration: 3000,
                gravity: "bottom",
                close: true,
                style: {
                    background: "linear-gradient(to right, black, gray)",
                    border: "solid 1px red",
                }
            }).showToast();
        };
    });
};

function searchProducts(term) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const filteredProducts = json.products.filter(product => product.title.toLowerCase().includes(term) || product.description.toLowerCase().includes(term));
            if (filteredProducts.length === 0) {
                document.querySelector("#productos-container").innerHTML = '<p>No hay ningún resultado para tu búsqueda. Intenta buscar de otra manera!</p>';
            } else {
                const botones = cardsAHtml(filteredProducts);
                changeImageOnHover(filteredProducts);
                eventoCards(botones, filteredProducts);
            }
        })
        .catch(error => console.error("Hubo un error al obtener los datos:", error));
}

fetch(url)
    .then(res => res.json())
    .then(json => {
        const botones = cardsAHtml(json.products);
        changeImageOnHover(json.products);
        eventoCards(botones, json.products);
    })
    .catch(error => console.error("Hubo un error al obtener los datos:", error));

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById("inputData").value.toLowerCase();
    searchProducts(searchTerm);
});

if(localStorage.getItem("productos")) {
    agregadosAlCarrito = JSON.parse(localStorage.getItem("productos"));
    agregadosAlCarrito.forEach(producto => {
        if(!producto.cantidad) {
            producto.cantidad = 1;
        }
    });
    updateCart();
}
function vaciarCarrito() {
    agregadosAlCarrito = []; 
    localStorage.removeItem("productos"); 
    updateCart(); 
}
document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);
console.log(agregadosAlCarrito)
console.log(cardsAHtml)