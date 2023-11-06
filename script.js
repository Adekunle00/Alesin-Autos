const switchElement = document.querySelector(".flicker")
const switcHElement = document.querySelector(".moon")


const bar = document.getElementById("bar")
const close = document.getElementById("close")
const navbar = document.getElementById('navbar')




if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
});

switcHElement.addEventListener('click', () => {
    document.body.classList.toggle('darrk')
});
//switch Mode End