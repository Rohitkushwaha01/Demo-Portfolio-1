let ham = document.getElementById('ham');
let ul = document.getElementById('ul');
let search = document.getElementById('search-box');
let nav = document.getElementById('nav');

ham.addEventListener('click', ()=>{
    ul.classList.toggle('hidden');
    search.classList.toggle('hidden');
    nav.classList.toggle('trans')
})