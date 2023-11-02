function evaluarIfElse() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const resultado = (numeroAleatorio > 5) ? "Verdadero" : "Falso";
    document.getElementById("ifElseResult").textContent = `El número aleatorio es ${numeroAleatorio}. Resultado: ${resultado}`;
}

function evaluarSwitch() {
    const selectedOption = document.getElementById("switchOption").value;
    switch (selectedOption) {
        case "A":
            document.getElementById("switchResult").textContent = "Opción A";
            break;
        case "B":
            document.getElementById("switchResult").textContent = "Opción B";
            break;
        case "C":
            document.getElementById("switchResult").textContent = "Opción C";
            break;
        default:
            document.getElementById("switchResult").textContent = "Opción no válida";
    }
}

function lanzarError() {
    try {
        throw new Error("Este es un error de ejemplo");
    } catch (error) {
        document.getElementById("tryCatchResult").textContent = error.message;
    }
}

function mostrarSecuenciaFor() {
    let secuencia = "";
    for (let i = 0; i < 10; i++) {
        secuencia += Math.floor(Math.random() * 10) + 1;
        if (i < 9) {
            secuencia += ", ";
        }
    }
    document.getElementById("forLoopResult").textContent = secuencia;
}

function mostrarSecuenciaWhile() {
    let secuencia = "";
    let i = 0;
    while (i < 10) {
        secuencia += Math.floor(Math.random() * 10) + 1;
        if (i < 9) {
            secuencia += ", ";
        }
        i++;
    }
    document.getElementById("whileLoopResult").textContent = secuencia;
}

document.getElementById("forLoop").addEventListener("click", mostrarSecuenciaFor);
document.getElementById("whileLoop").addEventListener("click", mostrarSecuenciaWhile);

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

function mostrarCalculoArea() {
    const radio = Math.floor(Math.random() * 10) + 1;
    const ancho = Math.floor(Math.random() * 10) + 1;
    const alto = Math.floor(Math.random() * 10) + 1;

    const areaCirculo = calcularAreaCirculo(radio);
    const areaRectangulo = calcularAreaRectangulo(ancho, alto);

    const resultado = `Área del círculo con radio ${radio}: ${areaCirculo.toFixed(2)}; Área del rectángulo ${ancho} x ${alto}: ${areaRectangulo}`;
    document.getElementById("functionResult").textContent = resultado;
}

document.getElementById("functionExample").addEventListener("click", mostrarCalculoArea);

function evaluarExpresionesYOperadores() {
    const numero1 = Math.floor(Math.random() * 10) + 1;
    const numero2 = Math.floor(Math.random() * 10) + 1;
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;
    const modulo = numero1 % numero2;
    const esIgual = numero1 === numero2;
    const noEsIgual = numero1 !== numero2;
    const esMayor = numero1 > numero2;
    const esMenor = numero1 < numero2;
    const resultado = ` 
	Numero1: ${numero1}, 
	Numero2: ${numero2},
    Suma: ${suma},
    Resta: ${resta},
    Multiplicación: ${multiplicacion},
    División: ${division},
    Módulo: ${modulo},
    Igualdad: ${esIgual},
    No Igualdad: ${noEsIgual},
    Mayor que: ${esMayor},
    Menor que: ${esMenor}
    `;
    document.getElementById("expressionResult").textContent = resultado;
}
document.getElementById("expressionExample").addEventListener("click", evaluarExpresionesYOperadores);

function mostrarEjemplosNumero() {
    const numero = Math.floor(Math.random() * 10) + 1;
    const numTexto = numero.toString();
    const numPrecision = numero.toPrecision(2);
    const numDecimal = numero.toFixed(2);
    const numExponencial = numero.toExponential(2);
    const resultado = `
    Valor como número: ${numero},
    Valor con precisión: ${numPrecision},
    Valor con decimales: ${numDecimal},
    Valor en notación exponencial: ${numExponencial}
    `;
    document.getElementById("numberResult").textContent = resultado;
}

function mostrarEjemplosMath() {
	const numero = Math.floor(Math.random() * 10) + 1;
    const raizCuadrada = Math.sqrt(numero);
    const potencia = Math.pow(numero, 3);
    const resultado = `
	Número: ${numero},
    Raíz cuadrada de ${numero}: ${raizCuadrada},
    Potencia de ${numero}^3: ${potencia},
    `;
    document.getElementById("mathResult").textContent = resultado;
}

function mostrarEjemplosFecha() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const resultado = `
    Fecha actual: ${año}-${mes}-${dia}
    `;

    document.getElementById("dateResult").textContent = resultado;
}

document.getElementById("numberExample").addEventListener("click", mostrarEjemplosNumero);
document.getElementById("mathExample").addEventListener("click", mostrarEjemplosMath);
document.getElementById("dateExample").addEventListener("click", mostrarEjemplosFecha);


function mostrarEjemplosTexto() {
    const textoOriginal = "Ejemplo de formato de texto en JavaScript";
    const textoMayusculas = textoOriginal.toUpperCase();
    const textoMinusculas = textoOriginal.toLowerCase();
    const resultado = `
    Texto original: ${textoOriginal},
    Texto en mayúsculas: ${textoMayusculas},
    Texto en minúsculas: ${textoMinusculas}
    `;
    document.getElementById("stringResult").textContent = resultado;
}

function mostrarEjemplosArreglos() {
    const colores = ["Rojo", "Verde", "Azul"];
    const primerColor = colores[0];
    colores.push("Amarillo");
    const resultado = `
    Arreglo de colores: ${colores},
    Primer color: ${primerColor}
    `;
    document.getElementById("arrayResult").textContent = resultado;
}

function mostrarEjemplosDOM() {
    const elementosPorTagName = document.getElementsByTagName("p");
    const primerParrafo = elementosPorTagName[0].textContent;
    const elementosPorClase = document.getElementsByClassName("ejemplo");
    const primerElementoPorClase = elementosPorClase[0].textContent;
    const resultado = `
    Elementos por etiqueta: ${elementosPorTagName.length} párrafos,
    Contenido del primer párrafo: "${primerParrafo}",
    Elementos por clase: ${elementosPorClase.length} elementos con clase "ejemplo",
    Contenido del primer elemento por clase: "${primerElementoPorClase}"
    `;
    document.getElementById("domResult").textContent = resultado;
}

document.getElementById("stringExample").addEventListener("click", mostrarEjemplosTexto);
document.getElementById("arrayExample").addEventListener("click", mostrarEjemplosArreglos);
document.getElementById("domExample").addEventListener("click", mostrarEjemplosDOM);