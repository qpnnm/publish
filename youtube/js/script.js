const moreBtn = document.querySelector('.info .moreBtn');
const title = document.querySelector('.info .title');
const btnSwitch = document.querySelector('.info .actions li button .fa-thumbs-up ');
console.log(btnSwitch);
moreBtn.addEventListener('click', function() {
    btnSwitch.classList.toggle('clicked');
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('addTitle');



});