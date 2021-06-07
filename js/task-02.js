const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const itemEl = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  return liEl;
})
 
 const ulEl = document.querySelector('#ingredients');

 ulEl.append(...itemEl);