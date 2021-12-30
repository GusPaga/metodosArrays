//PASO 1 "EJEMPLOS ARRAYS"

//ARRAY POSTS
const posts = [{
    id: 1,
    title: "mi primer post",
    image: "htpps://img.com/1",
    tags: ["javascript", "webdebelopment"],
}, {
    id: 2,
    title: "mi experiencia con React",
    image: "htpps://img.com/2",
    tags: ["javascript", "webdebelopment", "React"],

}, {
    id: 3,
    title: "por que deje Angular",
    image: "htpps://img.com/3",
    tags: ["javascript", "webdebelopment", "Angular"],
}]

//ARRAY ARRAY INVENTARIO
const inventario = [
    {
        nombre: 'manzanas',
        cantidad: 2
    },
    {
        nombre: 'bananas',
        cantidad: 0
    },
    {
        nombre: 'cerezas',
        cantidad: 5
    }
];

//PASO 2: METODOS DE ARRAYS

//1° METODO FIND (buscar)// para imprimir descomentar.

// const found = posts.find(post => post.image == "htpps://img.com/3");
// console.log(found);

// const found = inventario.find( inventario => inventario.cantidad == 0);
// console.log(found);


//2° METODO MAP (mapear)// para imprimir descomentar.

//PARA IMPRIMIR UNA LISTA CON LOS TITULOS DE LOS POSTS
// const foundPost = posts.map(posts => posts.title);
// console.log(foundPost);

//PARA IMPRIMIR UNA LISTA CON LOS NOMBRES DEL INVENTARIO
// const foundInventario = inventario.map(inventario => inventario.nombre);
// console.log(foundInventario);

