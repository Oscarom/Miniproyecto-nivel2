/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector)

const estancias = $(".estancias")





const newCard = (obj) => {

    const div = document.createElement('div');
    div.className = 'card-img';
    div.innerHTML = `
    <div class="img card-img-modified mt-3">
      <img class="w-100 h-100 rounded-4" src="${obj.photo}" alt="${obj.title}">
    </div>

    <div class="info d-flex justify-content-between">
      ${obj.superHost?"SUPERHOST":""}
      <span>${obj.type}</span>
      <span>${obj.beds !== null?obj.beds+" beds":" "}</span>

      <div class="stars d-flex">
      <span class="material-symbols-outlined start">grade</span>
      <span>${obj.rating}</span>
      </div>

    </div>

    <div class="title-d fw-bold text-start">${obj.title}</div>
    `
    return div

    
  }



  const showCards = (arr) => {
   estancias.innerHTML = '';
   arr.forEach( element => {
    const card = newCard(element);
    estancias.appendChild(card);
  })
  }
  
  
  export default {
    newCard,
    showCards,
    $,
  }

