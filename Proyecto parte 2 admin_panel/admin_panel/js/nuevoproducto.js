import { nuevoProducto } from "./api.js";
import { mostrarAlerta } from "./alerta.js";


(function (){

//Selectores 
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarProducto);

async function validarProducto(e) {
     e.preventDefault();
     
    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const categoria = document.querySelector('#categoria').value;

    const producto = {
        nombre,
        precio,
        categoria
    }
    
    if (validar(producto)) {
        //Todos los campos son obligatorios
        mostrarAlerta('Todos los campos son obligarotios');
        return;
    }

    await nuevoProducto(producto);
    window.location.href = 'index.html';
}

function validar(producto) {
    return !Object.values(producto).every(index => index !== '')
}

})();
