const menu_btn = document.getElementById("menu_btn")
const menu = document.getElementById("menu")

menu_btn.onclick = function () {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}