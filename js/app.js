import data from "./data.js"
import dom from "./dom.js"


// ejecuto la funcion getData para traer os datos del back y los guardo en la variable datos
const datos = await data.getData('./stays.json')

// seleccionamos el contenedor de las cards
const products = dom.$(".container")

//iteramos los objetos del array

datos.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = dom.newCard(element);
    console.log(element)
  
    // Agregamos el card al elemento products
    products.appendChild(card);
  })