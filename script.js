const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')   
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')   
    })
}

const test = document.getElementById('test');
const click = document.getElementById('click')
const category = document.getElementById('category')

if (test) {
    test.addEventListener('click', () => {
        category.classList.add('active')
    })
}