console.log('yey!');


const pizzaForm = document.querySelector('#pizza-form');
const pizza = document.querySelector('#pizza');
const lista = document.querySelector('#lista');

console.log(pizzaForm);


pizzaForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('Hemos detenido el submit');
  const saborPizza = pizza.value;
  console.log(saborPizza);
  // lista.innerHTML += 'Tu pizza es sabor: ' + saborPizza;
  lista.innerHTML += `<li>Tu pizza es sabor: ${saborPizza} </li>`;
});







//
