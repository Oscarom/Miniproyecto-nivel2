/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}

/* const getCountries = (data) => {
  let countries = data.map( elem => elem.city.name);
  countries = new Set(countries);
  countries = ['All',...countries];
  return countries
}; */

const filterByName= (arr, filtro) => {
  let filtered = arr.filter( elem => {
    return elem.city.toLowerCase().includes(filtro.toLowerCase())
  })
  return filtered
}

const filtrarGuest = (arr, numGuest) => {
  let filteredGuest = arr.filter( elem => elem.maxGuests >= numGuest)
  return filteredGuest
};

export default {
  getData,
  filterByName,
  filtrarGuest
}