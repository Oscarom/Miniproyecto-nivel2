import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData("./stays.json");


const searchProduct = dom.$("#searchProduct");
const botonBuscar = dom.$(".boton-buscar");
const guest = dom.$("#guest");
const guests = dom.$("#guests")
const place1 = dom.$(".place");
const place2 = dom.$("#place");
const stays = dom.$("#stays");

let filtro = ""
let numGuest = 0

searchProduct.addEventListener("keyup", () => {
  filtro = searchProduct.value;
  place1.innerHTML = filtro
  place2.innerHTML = filtro
});

guest.addEventListener("click", () => {
  numGuest = guest.value;
  guests.innerHTML = numGuest + " guest"
  return numGuest
});

botonBuscar.addEventListener("click", () => {
  const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);
  const filtered_final = data.filtrarGuest(filtered,numGuest);
  stays.innerHTML=filtered_final.length
  dom.showCards(filtered_final);
});




dom.showCards(datos);
