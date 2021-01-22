const mainTheme = document.getElementById("hero");
const gameChanger = document.getElementById("toggleButton");
gameChanger.addEventListener("click", () => {
  mainTheme.classList.toggle("body-light");
});
