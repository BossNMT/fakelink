let btn = document.querySelector('#btn-menu')
let sideBar = document.querySelector('.sidebar')

btn.onclick = function() {
    sideBar.classList.toggle("active")
}