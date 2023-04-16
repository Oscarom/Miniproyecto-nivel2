import data from "./data.js";
import dom from "./dom.js";

// ejecuto la funcion getData para traer los datos del back y los guardo en la variable datos
const datos = await data.getData("./stays.json");

/* const countries = data.getCountries(datos); */

//iteramos los objetos del array

/* const searchProduct = dom.$('#searchProduct');

searchProduct.addEventListener('keyup', () => {
  let filtro = searchProduct.value;
  console.log(filtro)
  const filtered = filtro === '' ? datos : data.filterByName(datos, filtro); 

  dom.showCards(filtered);
}) */

const searchProduct = dom.$("#searchProduct");
const botonBuscar = dom.$(".boton-buscar");

searchProduct.addEventListener("keyup", () => {
  let filtro = searchProduct.value;

  botonBuscar.addEventListener("click", () => {
    const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);
    dom.showCards(filtered);
  });
});

dom.showCards(datos);
