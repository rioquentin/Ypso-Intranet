export default function toggleMenu() {
    var menu = document.querySelector('#root')
    menu.classList.toggle("sidebar-open");
    console.log("toggle");
}
