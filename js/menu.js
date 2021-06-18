function menuNav() {
    const btn_open = document.getElementById('burger')
    const is_open = JSON.parse(btn_open.getAttribute('aria-expanded'))
    if (is_open) {
        const list = document.getElementsByClassName('list_menu_nav_open')[0]
        btn_open.setAttribute('aria-expanded',false)
        list.className = "list_menu_nav"
    } else {
        const list = document.getElementsByClassName('list_menu_nav')[0]
        btn_open.setAttribute('aria-expanded',true)
        list.className = "list_menu_nav_open"
    }
}