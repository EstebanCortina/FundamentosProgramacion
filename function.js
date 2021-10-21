var n1;
var n2;
var suma;
//Variables ejemplo de tipos de datos, no es necesario declarar su tipo.

var string = 'mensaje';
var numero = 1;
var logico = true;
var flotante = 9.99;
//

//Sistema de Suma
n1 = prompt('Sumar');
n2 = prompt('Sumar'+ ' ' + ' ' + n1 + '+');
suma = parseInt(n1) + parseInt(n2);

if(suma>10){
  document.write('<h1 style = "text-align: center;">' + suma + ' ' + 'es mayor que 10' + '</h1>');
  console.log('El numero fue mayor');
}else{
      document.write('<h1 style = "text-align: center;">' + suma + ' ' + 'es menor que 10' + '</h1>');
      console.log('El numero fue menor');
}
if((suma % 2)==0){
    let oe = '<h1 style = "text-align: center;">' + ' y es par' + '</h1';
    document.write(oe);
    console.log('y el numero anterior fue par');
}else{
  let oe = '<h1 style = "text-align: center;">' + ' y es impar' + '</h1';
  document.write(oe)
  console.log('y el numero anterior fue impar');
}

let mil = 1000;
 if(mil == '1000'){
   console.log('1000');
 }

 if(mil === '1000'){
   console.log('1000');
 }else{
   console.log('variable mil no es igual que "1000"');
 }


