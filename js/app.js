import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData("./stays.json");


const searchProduct = dom.$("#searchProduct");
const botonBuscar = dom.$(".boton-buscar");
const guest = dom.$("#guest");

let filtro = ""
let numGuest = 0

searchProduct.addEventListener("keyup", () => {
  filtro = searchProduct.value;
  return filtro
});

guest.addEventListener("click", () => {
  numGuest = guest.value;
  return numGuest
});

botonBuscar.addEventListener("click", () => {
  const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);
  const filtered_final = data.filtrarGuest(filtered,numGuest);

  dom.showCards(filtered_final);
});




dom.showCards(datos);
