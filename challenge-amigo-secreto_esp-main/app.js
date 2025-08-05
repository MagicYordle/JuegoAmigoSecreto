// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    //Valida que el campo inut no este vacio
    if (nombre === ""){
        alert("Por favor agrega el nombre de un amigo");
        return; //Detiene el programa si el campo esta vacio
    }
    listaDeNombres.push(nombre);
    console.log(listaDeNombres);
    
    mostrarLista();
    limpiarCaja();
}

function mostrarLista(){
    let listaHTML = listaDeNombres.map(nombre => `<li>${nombre}</li>`).join('');
    asignarTextoElemento('ul', listaHTML);
}

function asignarTextoElemento(elemento, texto){//Recibe parametros
    let elementoHTML = document.querySelector(elemento); // Documento
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//BOTON DE SORTEAR AMIGO

function sortearAmigo(){
    if(listaDeNombres.length === 0){
        alert("No has registrado a ningun amigo");
    }else{
        let indiceAleatorio = Math.floor(Math.random()*listaDeNombres.length);
        let amigoSeleccionado = listaDeNombres[indiceAleatorio];
        asignarTextoElemento('ul', amigoSeleccionado);
        console.log(amigoSeleccionado);
    }
}

