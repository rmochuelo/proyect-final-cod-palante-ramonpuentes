 const btnSwicth = document.querySelector ('#switch');
btnSwicth.addEventListener('click', () => {
    document.body.classList.toggle ('dark')
    btnSwicth.classList.toggle ('active');
});

function accion() {
    console.log ('Esta funcionando mi boton');
}