function mostrar(){
    const num1=parseInt(document.getElementById('min').value); //seleccionar el numero minimo del documento
    const num2=parseInt(document.getElementById('max').value); //seleccionar el numero maximo del documento
    let numeros=[];                                  //definir un arreglo vacio
    let valores=document.getElementById('num');     //seleccionar elemento html textarea del documento

    valores.value="";                               //limpiar el textarea

    for(var i=0;i<20;i++){                          
        numeros[i]= aleatorio(num1,num2);           //Definir cada elemento del arreglo
        valores.value+=(i+1)+" - "+numeros[i]+'\n'; //acumular cada elemento del arreglo en el textarea + salto de linea
    }
}

function aleatorio(min,max){                      //funcion aleatorio entre un min y un max     
 return Math.floor(Math.random()*(max-min+1)+min);    
}
