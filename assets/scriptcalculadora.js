// Funciones calculadora 1
function sumar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            document.getElementById('resultado1').value = parseFloat(valor1) + parseFloat(valor2)
        }else{
            document.getElementById('resultado1').value = 'Solo puedo sumar números'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function restar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            document.getElementById('resultado1').value = parseFloat(valor1) - parseFloat(valor2)
        }else{
            document.getElementById('resultado1').value = 'Solo puedo restar números'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function multiplicar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            document.getElementById('resultado1').value = parseFloat(valor1) * parseFloat(valor2)
        }else{
            document.getElementById('resultado1').value = 'Solo puedo multiplicar números'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function dividir(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (parseFloat(valor2) === 0){
            document.getElementById('resultado1').value = 'No se puede dividir por cero'
        }else{
            if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            
                document.getElementById('resultado1').value = parseFloat(valor1) / parseFloat(valor2)
            }else{
                document.getElementById('resultado1').value = 'Solo puedo dividir números'
            }
        }
    }
    else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function multiplo(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            if (valor1 % valor2 == 0){
                document.getElementById('resultado1').value = `${valor1} es múltiplo de ${valor2}`;
            }else{
                document.getElementById('resultado1').value = `${valor1} no es múltiplo de ${valor2}`}
        }else{
            document.getElementById('resultado1').value = 'Solo puedo ver el múltiplo de los números'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}
function raiz(){
    let valor1 = document.getElementById('campo1').value
    if (valor1.trim().length >0){
        if (parseFloat(valor1) < 0){
        document.getElementById('resultado1').value = 'No existen raíces de números negativos'
        }else{
            if (!isNaN(Number(valor1))){
                document.getElementById('resultado1').value = `La raiz cuadrada de ${valor1} es: ${valor1**0.5}`
            }else{
                document.getElementById('resultado1').value = 'La raiz es solo para los números...'
            }
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function comparar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value 
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            if (parseFloat(valor1) > parseFloat(valor2)){document.getElementById('resultado1').value = `${valor1} es mayor que ${valor2}` }
            else if (valor1 < valor2){
                document.getElementById('resultado1').value = `${valor1} es menor que ${valor2}`
            }else{
                document.getElementById('resultado1').value = `${valor1} y ${valor2} son iguales`
            }} 
        else{
            document.getElementById('resultado1').value = 'Solo puedo comparar números'}
        }
    else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

// Funciones Calculadora 2

function compararCadenas(){
    let valor1 = document.getElementById('campo3').value
    let valor2 = document.getElementById('campo4').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        if (valor1.length > valor2.length){document.getElementById('resultado2').value = 'La cadena de texto 1 es más grande que la cadena de texto 2' }
        else if (valor1.length < valor2.length){
            document.getElementById('resultado2').value = 'La cadena de texto 2 es más grande que la cadena de texto 1' 
        }else{
            document.getElementById('resultado2').value = 'La cadena de texto 1 y 2 son iguales en tamaño' 
        }
    }
    else{
        document.getElementById('resultado2').value = 'No debe estar vacío'
    }
}

function contarOcurrencias(){
    let valor1 = document.getElementById('campo3').value
    let valor2 = document.getElementById('campo4').value
    if (valor1.trim().length >0 && valor2.trim().length >0){

        let ocurrencias = valor1.toLowerCase().split(valor2.toLowerCase()).length - 1;
        if (ocurrencias >0){
            document.getElementById('resultado2').value = `El texto "${valor2}" se repite un total de ${ocurrencias} veces `
        }else{
            document.getElementById('resultado2').value = 'No se encontró el texto'
        }
    }
    else{
        document.getElementById('resultado2').value = 'No debe estar vacío'
    }

}

function quitarEspacios(){
    let valor1 = document.getElementById('campo3').value
    if (valor1.length >0){
        document.getElementById('resultado2').value = valor1.replaceAll(" ", "")
    }
    else{
        document.getElementById('resultado2').value = 'No debe estar vacío'
    }

}

function insertarCadena(){
    let valor1 = document.getElementById('campo3').value
    let valor2 = document.getElementById('campo4').value
    if (valor1.trim().length >0 && valor2.trim().length >0){
        let mitad = Math.ceil(valor1.length/2);
        document.getElementById('resultado2').value = `${valor1.slice(0, mitad)}${valor2}${valor1.slice(mitad)}`
    }
    else{
        document.getElementById('resultado2').value = 'No debe estar vacío'
    }

}
// Esto es algo que me dió curiosidad probar
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.acciones button');

    botones.forEach(boton => {
        boton.addEventListener('mousemove', (e) => {

            const posicion = boton.getBoundingClientRect();
            

            const x = e.clientX - posicion.left - posicion.width / 2;
            const y = e.clientY - posicion.top - posicion.height / 2;

            boton.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.transform = `translate(0px, 0px)`;
        });
    });
});