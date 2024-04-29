function ejercicio6 (){
    var numero = prompt ("Ingresar un numero");
    
    let paroImp1 = paroImp(numero);

    console.log(paroImp1);
}

function paroImp(numero) {
    if (numero == 0 ) {
        return "ingrese un numero valido";
    }
    else if (numero % 2 === 0) {
        return `El numero ${numero} es par`;
    }
    else if (numero % 2 !==0) {
        return `El numero ${numero} es impar`;
    }
}