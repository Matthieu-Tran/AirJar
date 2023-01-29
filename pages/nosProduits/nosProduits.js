
function removeAllClass(className) {

  let targets = document.querySelectorAll(`.${className}`);
  for (let t of targets) {
    t.classList.toggle(className, false);
  }

}

function showMoreInformations(ele) {

  if (ele.classList.contains('selected')) {
    ele.classList.toggle('selected', false);
  } else {
    removeAllClass("selected");
    ele.classList.toggle('selected', true);
  }

}