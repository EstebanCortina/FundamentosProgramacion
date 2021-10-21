var n1;
var n2;
var nu1;
var nu2;


n1 = parseInt(prompt('Primer numero:'));
n2 = parseInt(prompt('Segundo numero:'+ ' ' + ' ' + n1));


if(n1>n2){
  document.write('<h1 style = "text-align: center;">' + n1 + ' ' + 'es mayor que' +' '+ n2+ '</h1>');
  console.log(n1 + 'fue mayor'+ ' ' + 'que' + ' ' +n2);
}else{
    if(n1<n2){
      document.write('<h1 style = "text-align: center;">' + n2 + ' ' + 'es mayor que' +' '+ n1+ '</h1>');
      console.log(n1 + 'fue menor'+ ' ' + 'que' + ' ' +n2);
    }else{
      document.write('<h1 style = "text-align: center;">' + n2 + ' ' + 'es igual que' +' '+ n1+ '</h1>');
      console.log(n1 + 'es igual'+ ' ' + 'que' + ' ' +n2);
    }
}