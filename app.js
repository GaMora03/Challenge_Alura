// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = "";
        actualizarLista();
        limpiarResultado(); // Borra el amigo secreto si se agrega un nuevo nombre
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: <strong>${amigoSecreto}</strong>`;

    // Reiniciar la lista y los campos
    amigos = [];
    actualizarLista();
    document.getElementById("amigo").value = "";
}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}


