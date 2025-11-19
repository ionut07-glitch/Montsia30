function Correu() {
    let correu = document.getElementById("correu").value;
    let domini = "@montsia30.net";

    if (!correu.endsWith(domini)) {
        alert("El domini del correu ha de ser " + domini);
        return false;
    }
    return true;
}

function Contrasenya() {
    let contrasenya = document.getElementById("contrasenya").value;
    let contingutcontrasenya = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).+$/;

    if (!contingutcontrasenya.test(contrasenya)) {
        alert("La contrasenya ha de tindre 8 caràcters; una majúscula, una minúscula i un caràcter especial.");
        return false;
    }
    return true;
}

function registrarse() {
    const correu = document.getElementById("correu").value;
    const contrasenya = document.getElementById("contrasenya").value;

    if (correu === "admin@montsia30.net" && contrasenya === "Admin@1234") {
        window.location.href = "intranet.html"; 
        return false;
    }

    alert("Correu o contrasenya incorrectes");
    return false;
}
