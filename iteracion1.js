//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let miUl = document.createElement('ul');

countries.forEach(function(elemento){
    let miLI = document.createElement('li')
    miLI.innerText=elemento
    miUl.appendChild(miLI)
})

document.body.appendChild(miUl);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const fnremoveme = document.querySelectorAll('[class="fn-remove-me"]');
const miArray = Array.from(fnremoveme);

miArray.forEach(function(elemento){
    document.body.removeChild(elemento)
})

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let miUl2 = document.createElement('ul');

cars.forEach(function(elemento){
    let miLI2 = document.createElement('li')
    miLI2.innerText=elemento
    miUl2.appendChild(miLI2)
})

let miDiv = document.querySelector('div[data-function="printHere"]');

miDiv.appendChild(miUl2)

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const iterator of countries2) {
    let listaDivs = document.createElement('div');
    listaDivs.className = 'lista';
    //
    let titulo = document.createElement('h4');
    titulo.innerText = iterator.title;
    listaDivs.appendChild(titulo);
    //
    let img = document.createElement('img');
    img.src=iterator.imgUrl;
    listaDivs.appendChild(img);
    //
    document.body.appendChild(listaDivs);
}



//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

let miBoton = document.createElement('button')

miBoton.onclick = function(){
    let todosDivs = document.querySelectorAll('[class=lista]');
    let arrayDivs = Array.from(todosDivs);
    document.body.removeChild(arrayDivs[arrayDivs.length-1])
}
miBoton.innerText='boton'
document.body.appendChild(miBoton)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

let misListas = document.querySelectorAll('ul');
let arrayListas = Array.from(misListas);

arrayListas.forEach(function(elemento){ 
    let miBoton2 = document.createElement('button')

    miBoton2.onclick = function(){
        console.log('hola');
        let todosLi = elemento.querySelectorAll('li');
        let arrayLi = Array.from(todosLi);
        console.log(arrayLi);
        elemento.removeChild(arrayLi[arrayLi.length-1])
    }
    miBoton2.innerText='boton'

    elemento.appendChild(miBoton2)
})