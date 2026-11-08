// Funciones calculadora 1
function sumar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.length >0 && valor2.length >0){
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
    if (valor1.length >0 && valor2.length >0){
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
    if (valor1.length >0 && valor2.length >0){
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
    if (valor1.length >0 && valor2.length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            document.getElementById('resultado1').value = parseFloat(valor1) / parseFloat(valor2)
        }else{
            document.getElementById('resultado1').value = 'Solo puedo dividir números'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function multiplo(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    if (valor1.length >0 && valor2.length >0){
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
    if (valor1.length >0){
        if (!isNaN(Number(valor1))){
            document.getElementById('resultado1').value = `La raiz cuadrada de ${valor1} es: ${valor1**0.5}`
        }else{
            document.getElementById('resultado1').value = 'La raiz es solo para los números...'
        }
    }else{
        document.getElementById('resultado1').value = 'No debe estar vacío'
    }
}

function comparar(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value 
    if (valor1.length >0 && valor2.length >0){
        if (!isNaN(Number(valor1)) && !isNaN(Number(valor2))){
            if (valor1 > valor2){document.getElementById('resultado1').value = `${valor1} es mayor que ${valor2}` }
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
    
}

function contarOcurrencias(){

}

function quitarEspacios(){

}

function insertarCadena(){

}