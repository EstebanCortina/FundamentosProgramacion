//No es una variable primitiva el array

let a=[1,'hola',3,true];
//Interpolar ` y ${variable}. Nueva forma de concatenar 
document.write(`${a[0]} mesaje <br>`);
document.write(a[1]);

//Matriz. Arrays adentro de otros Arrys (distinto a C)
let c = [['toyota','mazda','toyota'],['uno','2019','cuatro']];

document.write(` Mi carro es ${c[0][1]} del año ${c[1][1]} <br>`);

//objeto. Puede contener arrays adentro (arrelgo asociativo)
let b = {
  color:["rojo","negro","azul"],//array
  marca:["toyota","honda","mazda"],
  modelo:["2000","2001","2050"],

}

//ciclo
//Iterar significa avanazar/recorrer desde el primer elemento de un arreglo hasta el ultimo
for(i=0;i<=19;i++){
  let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  if(i==10){
    i=11;
  document.write(`${numeros[i]} <br>`);
  }else{
    document.write(`${numeros[i]} <br>`);
  }
  
  
  
}