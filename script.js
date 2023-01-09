const fastInputElement = document.querySelector("#fast");
const cheapInputElement = document.querySelector("#cheap");
const goodInputElement = document.querySelector("#good");

const saveActive = [];

function check(item) {
  if (item.checked) {
    saveActive.push(item);
  } else {
    const index = saveActive.findIndex((currentArrItem) => {
      return currentArrItem === item;
    });

    saveActive.splice(index, 1);
  }

  if (saveActive.length > 2) {
    saveActive[1].checked = false;
    saveActive.splice(1, 1);
  }
}

fastInputElement.addEventListener("click", () => check(fastInputElement));
cheapInputElement.addEventListener("click", () => check(cheapInputElement));
goodInputElement.addEventListener("click", () => check(goodInputElement));
