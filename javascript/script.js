const dropdownMenus = document.querySelectorAll('.dropdown-menu'),
dropdownBtns = document.querySelectorAll('.down-arrow'),
menuToggleBtn = document.querySelector('.toggle-btn'),
mobileMenu = document.querySelector('.main-menu'),
menuCloseBtn = document.querySelector('.close-btn');


dropdownBtns.forEach((dropdownBtn,index)=>{
    dropdownBtn.addEventListener('click',(e)=>{
        dropdownMenus[index].classList.toggle('active');
        e.target.classList.toggle('open');
    })
})
menuToggleBtn.addEventListener('click',()=>{
    mobileMenu.classList.add('active');
})
menuCloseBtn.addEventListener('click',()=>{
    mobileMenu.classList.remove('active');
})