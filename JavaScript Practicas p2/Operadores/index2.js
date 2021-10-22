
let numero = parseInt(prompt('Numero'));

if((numero>0)&&((numero%2)==0)){
    document.write(numero + 'es positivo y multiplo de 2');
}else if((numero>0) && ((numero%2)!=0)){
   document.write(numero + 'es solo positivo');
}else if((numero<0) && ((numero%2)==0)){
   document.write(numero + 'es negativo y multiplo de 2');
}else{
   document.write(numero + 'es solo negativo');
}