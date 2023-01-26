(function(){
    //El uso de [...] comvierte a los elementos en arrays
    //querySelectorAll para seleccionar todos los elementos con una misma clase
    const slider = [...document.querySelectorAll('.clientes-body')];

    //querySelector selecciona solo un elemento con la clase que se llama entre '#(nombre de la clase)'
    const btnNext = document.querySelector('#next') ;
    const btnBefore = document.querySelector('#before') ;
    let value;


    btnNext.addEventListener( 'click', () =>{
        changePosition(1);
    });

    btnBefore.addEventListener( 'click', () =>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        //Obtiene un elemento y con el dataset indicamos que la data que necesitamos del elemento
        const clienteActual = document.querySelector('.clientes-body--show').dataset.id
        value = Number(clienteActual);
        value+= add;


        slider[Number(clienteActual)-1].classList.remove('clientes-body--show');
        //le sumo uno al valor de slider para contar el 0 del array
        if(value === slider.length+1 || value === 0 ){
            ///si value es = 0 me manda al ultimo elemento del slider sino al primero
            value = value === 0 ? slider.length : 1;
        }

        //selecciona el primer slider
        //le agrego la clase xq el la que hace que se muestre el contenido
        slider[value-1].classList.add('clientes-body--show');
    }

})();

