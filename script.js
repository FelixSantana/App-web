const btnVerificar = document.getElementById('btnVerificar');
const cedulaInput = document.getElementById('cedulaInput');
const verificarCedula = (e)=>{
    e.preventDefault();
    let arregloCedula = cedulaInput.value.replace(/-/g,'').split("");
    let arregloDigitos = [];
    let arregloFinal = [];
    let resultadoComparativo=0;
    for(let i=1; i<=arregloCedula.length; i++){
        if(i%2==0){
            arregloDigitos.push(parseInt(arregloCedula[i-1])*2);
        }
        else{
            arregloDigitos.push(parseInt(arregloCedula[i-1])*1);
        }
    }
    for(let i=0; i<arregloCedula.length-1; i++){
        if(arregloDigitos[i]>9){
            let string = arregloDigitos[i].toString();
            let suma = parseInt(string[0]) + parseInt(string[1]);
            arregloFinal.push(suma);
        }
        else{
            arregloFinal.push(arregloDigitos[i]);
        }
    }
    arregloFinal.forEach(valor=>{
        resultadoComparativo+=valor;
    })
    let modulo = resultadoComparativo%10;
    if(10-modulo==arregloCedula[10]){
        alert("La cedula ingresada es correcta");
    }
    else{
        alert("La cedula ingresada es incorrecta");
    }
}
btnVerificar.addEventListener("click",verificarCedula);