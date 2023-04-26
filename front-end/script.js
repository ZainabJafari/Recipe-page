const menubtn = document.getElementById("menubtn")
const menu = document.getElementById("menu")
const sideNav = document.getElementById("sideNav")

sideNav.style.right = "-250px"
menubtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0"
    menu.src = "bilder/close.png";
  }
  else {
    sideNav.style.right = "-250px"
    menu.src = "bilder/menu2.png";
  }
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });
}
