
function menuNav() {
    const state = !JSON.parse(document.getElementById('burger').getAttribute("aria-expanded"))
    document.getElementById('burger').setAttribute("aria-expanded",state);
    const menu = document.getElementsByClassName('list_menu_nav')[0];
    if (state) {
        menu.className = "list_menu_nav list_menu_nav_open"
        document.getElementById('burger').style.visibility = "hidden"
    } else {
        menu.className = "list_menu_nav"
        document.getElementById('burger').style.visibility = "visible"
    }
}