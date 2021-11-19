function  suma() {
   operacion = document.getElementById('operacion') .innerHTML= '+';
}
function  resta() {
   operacion = document.getElementById('operacion') .innerHTML= '-';
}
function  multi() {
   operacion = document.getElementById('operacion') .innerHTML= 'x';
}
function  div() {
   operacion = document.getElementById('operacion') .innerHTML= '/';
}

function ac() {
  n1.value = "";
  n2.value = "";
  }

function igual() {

  let a,b,r;
  switch (operacion) {
    
    case '+':
       a = parseInt(document.getElementById('n1').value);
      b = parseInt(document.getElementById('n2').value);
       r = a+b;
      document.getElementById('r1').innerHTML = r.toString();
      break;
    case '-':
        a = parseInt(document.getElementById('n1').value);
        b = parseInt(document.getElementById('n2').value);
        r = a-b;
      document.getElementById('r2').innerHTML = r.toString();
      break;
    case 'x':
       a = parseInt(document.getElementById('n1').value);
       b = parseInt(document.getElementById('n2').value);
       r = a*b;
      document.getElementById('r3').innerHTML = r.toString();
      break;
    case '/':
       a = parseInt(document.getElementById('n1').value);
       b = parseInt(document.getElementById('n2').value);
       r = a/b;
      document.getElementById('r4').innerHTML = r.toString();
      break;
    
  }
  
}