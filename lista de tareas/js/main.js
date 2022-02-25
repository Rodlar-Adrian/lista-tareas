
(function(){

    //variables 
    
    var lista1 = document.getElementById('lista'),
    input2 = document.getElementById('input1'),
    boton = document.getElementById('boton');


//funcion 
var agregarTarea = function(){
    var tarea = input2.value;

    //alert(tarea);

 if(tarea.length === 0){
     //alert("ok")
        input2.setAttribute("placeholder","agrega una tarea valida"); 
        return false;

           } else {
            var nuevaTareA =  document.createElement('li');
            var elClick = document.createElement('a');
            var contenidoInput =  document.createTextNode(tarea);
         
           
         
             // agregamos lo que trae el input al elemento anchor 
         elClick.appendChild(contenidoInput);
         //al elemnto a (anchor , enlace) le agregamos el atributo de enlace este sera uno muerto para que este sea clickqueable 
         elClick.setAttribute("href","#");
         //a la lista que creamos le pasamos el contenido que trae la variable elclik 
         nuevaTareA.appendChild(elClick);
         //en nuestra lista definida en nuestro html le pasamos todo lo quie traiga nueva tarea 
         lista1.appendChild(nuevaTareA);
          
         input2.value.length === 0;
         input2.setAttribute("placeholder","agrega tu tarea"); 
         
         
         //agregamos a cada elemento agregado a la lista un evento para que pueda ser borrado 
         
         for(i = 0; i<lista1.children.length; i++){
             lista1.children[i].addEventListener('click',borrarTarea)

           };
   
        };
   
         
};

     var comprobarInput = function(){
input2.value = '';
 input2.setAttribute("placeholder", "introduce o agrega  tu tarea" );
     };



      var borrarTarea = function(){
         this.parentNode.removeChild(this);
         alert("estas seguro que quieres borrar la tarea");
          };
          




            //eventos:
    //agrega una tarea 
boton.addEventListener('click',agregarTarea);

//comprobar input
input2.addEventListener('click',comprobarInput);





//aqui agregamos los eventos de inicio 
for(i = 0; i<lista1.children.length; i++){
    lista1.children[i].addEventListener('click',borrarTarea)
         

}

})();

