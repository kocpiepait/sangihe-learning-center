//inisialisasi navbar
const navbar = document.querySelector

('.navbar');

// ketika menu diclick tonggle class active
document.querySelector('#menu' ).onclick = () => {
    navbar.classList.toggle('active');
};

//icon menu berubah 
changeIcon = (icon) => icon.classList.toggle('bx-x') 
