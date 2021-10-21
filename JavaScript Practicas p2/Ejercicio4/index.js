var pregunta;

pregunta= prompt('¿Cuánto dinero tines?');
 var dinero = parseInt(pregunta)

 if(dinero>=10){
   //helado vainilla
    if(dinero>=15){
    document.write('Te alcanza para un helado de vainilla:)<br>');
    if(dinero >15 ){
      var cambio = dinero - 15;
      switch (cambio) {
        case 1:
              document.write('y te sobra'+' '+"$"+cambio+' '+'peso <br><br>')   
          break;
        default:
          document.write('y te sobran'+' '+"$"+cambio+' '+'pesos <br><br>')
          break;
      }
    }else{
      if(dinero==15){
        document.write('y no te sobra nada <br><br>');
      }
    }
  }
//helado de chocolate
if(dinero>=19){
    document.write('Te alcanza para un helado de chocolate:) <br>');
    if(dinero >19 ){
      var cambio = dinero - 19;
      switch (cambio) {
        case 1:
              document.write('y te sobra'+' '+"$"+cambio+' '+'peso <br><br>')   
          break;
        default:
          document.write('y te sobran'+' '+"$"+cambio+' '+'pesos <br><br>')
          break;
      }
    }else{
      if(dinero==19){
        document.write('y no te sobra nada <br><br>');
      }
    }
  }
  //helado de coco
  if(dinero>=10){
    document.write('Te alcanza para un helado de coco:) <br>');
    if(dinero >10 ){
      var cambio = dinero - 10;
      switch (cambio) {
        case 1:
              document.write('y te sobra'+' '+"$"+cambio+' '+'peso <br><br>')   
          break;
        default:
          document.write('y te sobran'+' '+"$"+cambio+' '+'pesos <br><br>')
          break;
      }
    }else{
      if(dinero==10){
        document.write('y no te sobra nada <br><br>');
      }
    }
  }
  
 }else{
   document.write('No te alcanza para nada :,( <br>');
 }