var numero1 = 5;
var numero2 = 8;
function ejercicio3() {

if(numero1<numero2) {
    console.log("numero1 no es mayor que numero2");
    }
    if(numero1>0) {
    console.log("numero2 es positivo");
    }
    if(numero1!=0) {
    console.log("numero1 es negativo o distinto de cero");
    }
    let aux = numero1++;
    if(aux<numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }

}