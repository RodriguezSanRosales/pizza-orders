const pizzaForm = document.querySelector('#pizza-form');
const sizePizza = pizzaForm.size;
var checkboxes = document.getElementsByName('ingredients');

const pizzaMasa = document.getElementById('opcionMasa');
const pizzaNumbers = document.getElementById('cantidad');

//orders section
const listOrder = document.querySelector('.list-order');

var activeOrder = [];

pizzaForm.addEventListener('submit' , function(event){
  event.preventDefault();

  const masaValue = pizzaMasa.value;
  const sizeValue = sizePizza.value;
  const numberValue = pizzaNumbers.value;

  //checkboxes
  var vals = "";
  for (var i=0; i < checkboxes.length;  i++) {
      if (checkboxes[i].checked) {
        vals += "<li>" + checkboxes[i].value + '</li>';
      }
  }

  const newPizza = {
    masa: masaValue,
    size: sizeValue,
    numbers: numberValue,
    ingredients: vals
  }
  activeOrder.push(newPizza);
  updateList();
});

function updateList(){
  listOrder.innerHTML = `<h2 class="titleOrder">Orden</h2>`;
  for(let pizza of activeOrder){
    const contInfo = `
      <div class="cont-infoPizza">
        <span class="btn-delete"><i class="fas fa-times"></i></span>
        <h3>Tipo de Masa: ${pizza.masa}</h3>
        <h3>Tamaño: ${pizza.size}</h3>
        <h3>Cantidad de Pizzas: ${pizza.numbers}</h3>
        <h3>Ingredientes:</h3>
        <ul> ${pizza.ingredients} </ul>
      </div>
    `
    listOrder.innerHTML += contInfo;
  }

  var btn = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
      e.currentTarget.parentNode.remove();

    });
  }
}

//scroll menu

var header = document.getElementById('header');
var scrollpos = window.scrollY;

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;
    if(scrollpos >= 150){
      header.classList.add("scrollMenu");
    }
    else {
      header.classList.remove("scrollMenu");
    }
});