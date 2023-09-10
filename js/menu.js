// ------------------- Codigo mostrar y ocultar menu  ----------------------------
const $body = document.getElementById("boton_menu"),
  $body1 = document.getElementById("boton_menu1"),
  $body2 = document.getElementById("boton_menu2"),
  $header = document.getElementById("header_datos"),
  $mover = document.getElementById("body"),
  $menu = document.getElementById("menu");

$body.addEventListener("click", () => {
  $mover.classList.toggle("body_move");
  $menu.classList.toggle("menu_move");
  document.getElementById('esquina').style.borderRadius = "20px 0px 0px 0px";
});
$body1.addEventListener("click", () => {
  $mover.classList.toggle("body_move");
  $menu.classList.toggle("menu_move");
  document.getElementById('esquina').style.borderRadius = "0px";
  document.querySelector('.body').style.borderRadius = "0px";
});
$body2.addEventListener("click", () => {
  $mover.classList.toggle("body_move");
  $menu.classList.toggle("menu_move");
  $header.classList.toggle("header_datos_move");
});

