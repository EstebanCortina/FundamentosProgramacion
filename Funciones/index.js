
function cubico() {
  r= parseInt(prompt('Introduzca un numero'));
  r2= r*r*r;
  return r2;
}

document.write('funcion normal:'+cubico()+'<br>');

//Por lo general se declaran las ArrowFunctions en variables
//tipo CONST

const cubicoArrow = (r) =>{
  r2 = r*r*r;
  return r2;
};

document.write('function Arrow:'+cubicoArrow(parseInt(prompt('introduzca un numero'))));