function ejercicio4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    let Documento = document.querySelector("#Documento").ariaValueMax;
    let Nletra = Documento % 23;
    console.log(letras[Nletra]);
    if (letra == letraUser){
        console.log("Las letras son iguales");
    } else{
        console.log("La letra ingresada es incorrecta");
    }
    if (Documento > 0 && Documento <99999999){

        let letra = letras[Nletra];

        console.log("la letra es tu Documento es:  "+ letra);
    } else{
        console.log("El Documento es incorrecto");
    }
}