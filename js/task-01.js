const itemEl = document.querySelectorAll(".item");
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach((elem) => {
    const liEl = elem.getElementsByTagName("li");
    console.log(
      `* Категория: ${elem.firstElementChild.textContent}\n* Количество элементов: ${liEl.length}`
    );
})

