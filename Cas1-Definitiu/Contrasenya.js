function Contrasenya() {
    let contrasenya = document.getElementById("contrasenya").value;
    let contingutcontrasenya = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).+$/;

    if (!contingutcontrasenya.test(contrasenya)) {
        alert("La contrasenya ha de tindre 8 caràcters; una majúscula, una minúscula i un caràcter especial.");
        return false;
    }
    return true;
}