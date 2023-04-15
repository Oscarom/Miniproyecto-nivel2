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

const getCountries = (data) => {


  //mapeo el objeto data
  let countries = data.map( elem => elem.city.name);

  // Convertimos a SET para obtener las categorias sin valores repetidos
  countries = new Set(countries);

  // Convertimos el SET a un Array
  countries = ['All',...countries];

  return countries
};

const filterByName= (arr, filtro) => {
  
  let filtered = arr.filter( elem => {
    return elem.city.toLowerCase().includes(filtro.toLowerCase()) || elem.title.toLowerCase().includes(filtro.toLowerCase())
  })

  console.log(filtered);
  return filtered
}

export default {
  getData,
  getCountries,
  filterByName
}