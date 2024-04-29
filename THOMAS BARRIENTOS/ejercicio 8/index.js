function ejercicio8 (){
let texto = prompt("Ingresar la cadena");

let result = espalindromo(texto);

console.log(result);

}
function espalindromo(texto) {

    texto.toLowerCase().replace(/[^a-zA-Z0-9]/g,``);
    
    if (texto === texto.split(``).reverse().join(``)) {
        return "es un palidromo";
    }
    else {
        return "no es palidromo";
    }
}