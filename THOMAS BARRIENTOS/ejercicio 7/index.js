function ejercicio7 (){
    let txt = prompt("Ingrese el texto");
    let result = mayuscula(txt);
    console.log(result);


}
function mayuscula (text){
    let mayusculas=0;
    let minusculas=0;
    
    for (let i = 0; i< text.length; i++) {
        if (text.charAt(i) === text.charAt(i).toUpperCase()){
            mayusculas ++;
        }else if (text.charAt(i) === text.charAt(i).toLowerCase()){
            minusculas ++;
        }
       
    }


    if (mayusculas==0) {
        return "son todas minusculas";
    } else if(minusculas==0)  {
       return "son todas mayusculas";    
    }
    else {
        return "son mayusculas y minusculas";
    }
}
