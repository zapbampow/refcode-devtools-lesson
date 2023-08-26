const html = document.querySelector("#html");
const css = document.querySelector("#css");

function showHtml() {
  console.log("show html elements info");
  html.classList.add("show");
  css.classList.remove("show");
}

function showCss() {
  console.log("show css elements info");
  css.classList.add("show");
  html.classList.remove("show");
}
