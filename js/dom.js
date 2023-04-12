/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

//funcion para seleccionar elementos del dom

const $ = (selector) => document.querySelector(selector)

// crear nueva card

const newCard = (obj) => {
    const div = document.createElement('div');
    div.className = 'card-img';
  
    // Insertar los elementos del card
    div.innerHTML = `
    <div class="img card-img-modified">
      <img class="w-100 h-100 rounded-4" src="${obj.photo}" alt="${obj.title}">
    </div>

    <div class="info d-flex justify-content-between mt-3">
      <p class="d-flex">
      <span class="fw-bold">${obj.superHost}</span>
        <span class="fw-bold">${obj.type}${obj.beds}beds</span>
        <span class="material-symbols-outlined">star</span>
        <span>${obj.rating}</span>
      </p>
    </div>
    `
  
    return div
  }
  
  export default {
    newCard,
    $,
  }
