function igual(e) {
  let a,b,r;
  switch (e) {  
    case 1:
      document.getElementById('operacion') .innerHTML= '+';
       a = parseInt(document.getElementById('n1').value);
      b = parseInt(document.getElementById('n2').value);
       r = a+b;
      document.getElementById('r1').innerHTML = r.toString();
      break;
    case 2:
      document.getElementById('operacion') .innerHTML= '-';
        a = parseInt(document.getElementById('n1').value);
        b = parseInt(document.getElementById('n2').value);
        r = a-b;
      document.getElementById('r2').innerHTML = r.toString();
      break;
    case 3:
      document.getElementById('operacion') .innerHTML= 'x';
       a = parseInt(document.getElementById('n1').value);
       b = parseInt(document.getElementById('n2').value);
       r = a*b;
      document.getElementById('r3').innerHTML = r.toString();
      break;
    case 4:
      document.getElementById('operacion') .innerHTML= '/';
       a = parseInt(document.getElementById('n1').value);
       b = parseInt(document.getElementById('n2').value);
       r = a/b;
      document.getElementById('r4').innerHTML = r.toString();
      break;
    case 5:
      n1.value = "";
      n2.value = "";
      break; 
  }
}