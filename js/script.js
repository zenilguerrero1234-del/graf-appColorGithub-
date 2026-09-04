// Obtener los controles RGB
let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");
let azul = document.getElementById("azul");


// Obtener las cajas para escribir los valores RGB
let valorRojoInput = document.getElementById("valorRojoInput");
let valorVerdeInput = document.getElementById("valorVerdeInput");
let valorAzulInput = document.getElementById("valorAzulInput");


// Obtener el Color Picker
let colorPicker = document.getElementById("colorPicker");


// Obtener el recuadro de color
let cuadroColor = document.getElementById("cuadroColor");


// Obtener los elementos donde se mostrarán los códigos
let codigoRGB = document.getElementById("codigoRGB");
let codigoHex = document.getElementById("codigoHex");



// ========================================
// ACTUALIZAR COLOR
// ========================================

function actualizarColor() {

    // Obtener los valores RGB
    let r = Number(rojo.value);
    let g = Number(verde.value);
    let b = Number(azul.value);


    // Mostrar los valores en las cajas
    valorRojoInput.value = r;
    valorVerdeInput.value = g;
    valorAzulInput.value = b;


    // Crear el color RGB
    let colorRGB = "rgb(" + r + ", " + g + ", " + b + ")";


    // Cambiar el color del recuadro
    cuadroColor.style.backgroundColor = colorRGB;


    // Mostrar el código RGB
    codigoRGB.textContent = colorRGB;


    // Convertir RGB a hexadecimal
    let hexadecimal =
        "#" +
        convertirHexadecimal(r) +
        convertirHexadecimal(g) +
        convertirHexadecimal(b);


    // Mostrar el código hexadecimal
    codigoHex.textContent = hexadecimal;


    // Actualizar el Color Picker
    colorPicker.value = hexadecimal
}



// ========================================
// CONVERTIR DECIMAL A HEXADECIMAL
// ========================================

function convertirHexadecimal(numero) {

    let hexadecimal = Number(numero).toString(16);


    if (hexadecimal.length == 1) {

        hexadecimal = "0" + hexadecimal;

    }


    return hexadecimal.toUpperCase();
}



// ========================================
// CONVERTIR HEXADECIMAL A RGB
// ========================================

function actualizarDesdeColorPicker() {

    // Obtener el color hexadecimal
    let hexadecimal = colorPicker.value;


    // Obtener rojo
    let r = parseInt(hexadecimal.substring(1, 3), 16);


    // Obtener verde
    let g = parseInt(hexadecimal.substring(3, 5), 16);


    // Obtener azul
    let b = parseInt(hexadecimal.substring(5, 7), 16);


    // Actualizar los controles RGB
    rojo.value = r;
    verde.value = g;
    azul.value = b;


    // Actualizar todo
    actualizarColor();
}



// ========================================
// EVENTOS DE LOS CONTROLES DESLIZABLES
// ========================================

rojo.addEventListener("input", actualizarColor);

verde.addEventListener("input", actualizarColor);

azul.addEventListener("input", actualizarColor);



// ========================================
// EVENTOS DE LAS CAJAS NUMÉRICAS
// ========================================

valorRojoInput.addEventListener("input", function() {

    let valor = Number(valorRojoInput.value);


    if (valor >= 0 && valor <= 255) {

        rojo.value = valor;

        actualizarColor();

    }

});


valorVerdeInput.addEventListener("input", function() {

    let valor = Number(valorVerdeInput.value);


    if (valor >= 0 && valor <= 255) {

        verde.value = valor;

        actualizarColor();

    }

});


valorAzulInput.addEventListener("input", function() {

    let valor = Number(valorAzulInput.value);


    if (valor >= 0 && valor <= 255) {

        azul.value = valor;

        actualizarColor();

    }

});



// ========================================
// EVENTO DEL COLOR PICKER
// ========================================

colorPicker.addEventListener("input", actualizarDesdeColorPicker);



// ========================================
// COLOR INICIAL
// ========================================

actualizarColor();