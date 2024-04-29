function ejercicio5 () {
    var n = (prompt("Ingresar un numero"));
    function factorial(n) {
        let resultado = 1;
        if (n == 0 || n == 1){
            return resultado;
    }
    else if (n > 1) {
        for(var i = n; i >= 1 ; i--){
            resultado = resultado * i;
        }
        return resultado;
    }
    else{
        return "El numero tiene que ser positivo"
    }
}
        resultado = factorial(n);
        console.log("factorial de " + n + "es" + resultado);
}