const showMenuBtn = document.getElementById("show-menu-btn");
const hideMenuBtn = document.getElementById("hide-menu-btn");

const menuList = document.getElementById("menu-list");

showMenuBtn.addEventListener("click", showMenu);
hideMenuBtn.addEventListener("click", hideMenu);

function  showMenu(event){
    menuList.style.marginTop="0";
}
function  hideMenu(event){
    menuList.style.marginTop="-100%";
}