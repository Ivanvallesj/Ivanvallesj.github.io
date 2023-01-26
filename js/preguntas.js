(function(){
    const titlePreguntas = [...document.querySelectorAll('.preguntas-title')]
    titlePreguntas.forEach(pregunta =>{
        pregunta.addEventListener('click', ()=>{
            
            let height = 0;
            let answer = pregunta.nextElementSibling; /* Nos devuelve el seguiente elemento en el que estamos pocisionado en este caso seria el parrafo a mostrar */
            let addPadding = pregunta.parentElement.parentElement;  /* selecciona el objeto padre en el cual nos encontramos */


            addPadding.classList.toggle('preguntas-pading--add')
            /* selecciona los hijos del elemento el el que estamos pocicionados el 0 seria el que se encuentra abajo y con classlist toggle cambiamos la clas por la seleccionada () */
            pregunta.children[0].classList.toggle('preguntas-arrow--rotate');



            /* Aca vemos el heigt del parrafo si esta en 0 es por que no se esta msotrando en pantalla */
            if(answer.clientHeight ===0){
                height = answer.scrollHeight  /* Le da un alto minimo para que se vea en pantalla */
            } 

            answer.style.height = `${height}px`;
        })
    })
})();