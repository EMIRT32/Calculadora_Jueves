const suma = document.getElementById("suma");
const respuesta = document.getElementById("respuesta")

suma.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value);
    console.log(num1);
    let num2= parseFloat(document.getElementById("num2").value);
    
    let resultado = parseFloat((num1 + num2));
    console.log(resultado);
    respuesta.innerHTML = "<i>" + resultado +"</i>";
    
    respuesta.textContent;
});
resta.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value);
    console.log(num1);
    let num2= parseFloat(document.getElementById("num2").value);
    
    let resultado = parseFloat((num1 - num2));
    console.log(resultado);
    respuesta.innerHTML = "<i>" + resultado +"</i>";
    
    respuesta.textContent;
});
multiplicar.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value);
    console.log(num1);
    let num2= parseFloat(document.getElementById("num2").value);
    
    let resultado = parseFloat((num1 * num2));
    console.log(resultado);
    respuesta.innerHTML = "<i>" + resultado +"</i>";
    
    respuesta.textContent;
});
dividir.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value);
    console.log(num1);
    let num2= parseFloat(document.getElementById("num2").value);
    
    let resultado = parseFloat((num1 / num2));
    console.log(resultado);
    respuesta.innerHTML = "<i>" + resultado +"</i>";
    
    respuesta.textContent;
});