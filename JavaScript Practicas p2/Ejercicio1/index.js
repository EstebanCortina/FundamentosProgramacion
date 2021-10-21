
var re;

re=prompt('¿Eres culpable?: ');

if(re=='si'){
  document.write('<h1 style = "text-align: center;">Iras a la carcel</h1>');
}else{
  if(re=='sí'){
    document.write('<h1 style = "text-align: center;">Iras a la carcel</h1>');
  }else{
     if(re=='Si'){
        document.write('<h1 style = "text-align: center;">Iras a la carcel</h1>');
     }else{
        if(re=='Sí'){
           document.write('<h1 style = "text-align: center;">Iras a la carcel</h1>');
        }else{
          if(re=='no'){
            document.write('<h1 style = "text-align: center;">Iras a casa</h1>');
          }else{
             if(re=='No'){
              document.write('<h1 style = "text-align: center;">Iras a casa</h1>');
            }
          }
        }
     }
  }
}