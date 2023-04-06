const iNombre = document.querySelector("input#nombre");
const mNombre = document.querySelector("input#nombre + span");
iNombre.addEventListener('blur', (e) => {
    if( iNombre.value.length < 3 ) {
        mNombre.textContent = "Nombre muy corto";
        mNombre.classList.add("error");
        iNombre.classList.add("error");
    } else {
        iNombre.classList.remove("error");
        mNombre.classList.remove("error");
        mNombre.textContent = "";
    }
});
