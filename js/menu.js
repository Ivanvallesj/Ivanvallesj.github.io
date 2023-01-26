

(function(){
    const menu = document.querySelector('.nav-link');
    const openButton = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.nav-close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-link--show');
    });

})();
