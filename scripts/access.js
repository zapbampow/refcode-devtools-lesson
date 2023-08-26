const menu = document.querySelector("#menu");
const keyboard = document.querySelector("#keyboard");
const inspect = document.querySelector("#inspect");

function showMenu() {
  console.log("show info on how to use the menu to access dev tools");
  menu.classList.add("show");
  keyboard.classList.remove("show");
  inspect.classList.remove("show");
}

function showKeyboard() {
  console.log(
    "show info on how to use the keyboard shortcuts to access dev tools"
  );
  menu.classList.remove("show");
  keyboard.classList.add("show");
  inspect.classList.remove("show");
}

function showInspect() {
  console.log(
    "show info on how to use the context menu 'Inspect' to access dev tools"
  );
  menu.classList.remove("show");
  keyboard.classList.remove("show");
  inspect.classList.add("show");
}
