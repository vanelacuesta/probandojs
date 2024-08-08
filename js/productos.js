// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const productos = [
    {
        id: 1,
        name: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "./img/tarjeta_grafica.jpg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        name: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "./img/monitor.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        name: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "./img/ssd.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        name: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        name: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "./img/procesador.jpg",
        descripcion: null,
    },
    {
        id: 6,
        name: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "./img/mouse.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        name: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "./img/ram.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        name: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "./img/disco-externo.jpg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        name: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        name: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "./img/auriculares.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];
