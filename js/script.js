
const listaSpesa = [
  'pane',
  'latte',
  'uova',
  'biscotti',
  'affettati',
  'pomodori',
  'formaggio',
  'frutta',
  'maionese',
]

let counter = 0;

while(counter < listaSpesa.length){

  const list = document.getElementById('list')
  let li = document.createElement('li')

  li.innerHTML = listaSpesa[counter]

  counter++;


  list.append(li)

}
