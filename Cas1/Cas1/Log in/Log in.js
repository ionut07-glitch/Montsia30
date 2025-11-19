function Correu() {
    let correu = document.getElementById("correu").value.trim().toLowerCase();
    const domini = "@montsia30.net";

    if (!correu.endsWith(domini)) {
        alert("El domini del correu ha de ser " + domini);
        return false;
    }
    return true;
}

function Contrasenya() {
    let contrasenya = document.getElementById("contrasenya").value;
    let contingutcontrasenya = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!contingutcontrasenya.test(contrasenya)) {
        alert("La contrasenya ha de tindre mínim 8 caràcters: una majúscula, una minúscula i un caràcter especial.");
        return false;
    }
    return true;
}

function iniciarSessio() {
    if (!Correu() || !Contrasenya()) {
        return false; 
    }

    const correu = document.getElementById("correu").value.trim().toLowerCase();
    const contrasenya = document.getElementById("contrasenya").value;

    if (correu === "admin@montsia30.net" && contrasenya === "Admin@1234") {
        window.location.href = "Formulari digi.html";
        return false; 
    }

    alert("Correu o contrasenya incorrectes");
    return false;
}