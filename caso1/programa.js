var num1,num2,i,cubo;
num1=parseInt(prompt("Ingrese Número 1"));
num2=parseInt(prompt("Ingrese Número 2"));

if (num1<num2) {
    i=num1; //inicializacion
    do {
        if(i%2!=0){
         document.write(i+" => ");
         document.write(i*i*i+"<br>");
        }
         
         i++;//incrementador
     } while (i<=num2);
} else {
    i=num2; //inicializacion
    do {
        
        if(i%2!=0){
         document.write(i+" => ");
         document.write(i*i*i+"<br>");
        }
         
         i++;//incrementador
     } while (i<=num1);
    
}