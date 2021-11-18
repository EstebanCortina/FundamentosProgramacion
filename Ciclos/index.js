let nombres=['Esteban','Cecilia','Brandon','Carolina','Eve','Fernanda'];

//.length me dice la ultima posicion del arreglo, con esa informacion sabemos el tamano del array
//usa mas ancho de banda 
for (let index = 0; index < nombres.length; index++) {
  
  document.write('tamanio del arreglo:'+ ' '+nombres.length+' ');
  document.write(nombres[index]+'<br>');
  
}
//este metodo es usado para iterar arreglos del 0 hasta el final.
//usa una funcion de flecha (arrow function)
//parametro=variable
//no se puede cortar con break ni continue
//necesita menos ancho de banda para ejecutarse (a la hora de usarlo en una pagina web real)
nombres.forEach(element => {
  document.write('metodo forEach'+' '+element+'<br>')
  //aqui podemos seguir escribiendo mas instrucciones
});
//Nos da la posicion de los elementos
for(let index in nombres){
  
  if(index==5){
    //en cuanto se llegue al 5 se rompe el ciclo y ya no se ejecuta nada nada.
   break;
  }else if(index==1){
    //en cuanto llegue a 1 se lo salta al que sigue
    continue;
  }
  document.write(index+'<br>');
  }
//nos da el elemento
//se recomienda poner el singular del nombre del array en la variable para los elementos (nombres=nombre)
for(let nombre of nombres){
    document.write(nombre+'<br>');
}