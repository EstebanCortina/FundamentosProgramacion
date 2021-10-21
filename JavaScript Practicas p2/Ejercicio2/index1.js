var n1;
var n2;
var suma;


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