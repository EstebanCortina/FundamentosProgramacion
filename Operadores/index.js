

let n = parseInt(prompt('Numero par o impar: '));

if((n%2)==0){
  document.write('<h1>'+ n + 'es par </1>');
}else if((n%2)!=0){
  document.write('<h1>'+ n + 'es impar </h1>');
}else if(Number.isNaN(n)){
  document.write('no es un numero');
}

