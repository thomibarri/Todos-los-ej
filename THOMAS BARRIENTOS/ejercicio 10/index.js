function lanzarDados() {

    function lanzarDado() {
        return Math.floor(Math.random() * 6) + 1;
    }

  
    let conteoSumas = new Array(11).fill(0); 


    for (let i = 0; i < 36000; i++) {
        let suma = lanzarDado() + lanzarDado();
        conteoSumas[suma - 2]++; 
    }

    
    console.log("Resultado del conteo de las sumas de los dados:");
    for (let i = 0; i < conteoSumas.length; i++) {
        console.log(`Suma ${i + 2}: ${conteoSumas[i]} veces`);
    }
}