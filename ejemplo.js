var num1,num2,suma;


while (isNaN(num1) || num1=="") {
    //document.write("eso no es un numero");
    alert("no es un numero");
    num1 = prompt("escribe el primer numero: ");

}
//num1 = prompt("escribe el primer numero: ");
num2 = prompt("escribe el segundo numero: ");
suma=num1+num2;
document.write(num1+" * "+num2+" = "+num1*num2+"</br>");

document.write(num1+" / "+num2+" = "+num1/num2+"</br>");

document.write(num1+" + "+num2+" = "+ suma +"</br>");
document.write(num1+" - "+num2+" = "+(num1-num2)+"</br>");
//document.write(num2+num1);
