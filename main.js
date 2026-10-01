//ARRAYS

const Motos = ['KTM 790', 'SUPER DUKE 1290', 'DUCATI PANIGALE', 'KTM 390', 'MT09']

const carrito = []

Motos.push('DUCATI MONSTER')

Motos.unshift('BMW S1000RR')

function menuPrincipal(){

    let respuesta = parseInt(prompt(
        'Que desea realizar hoy? \n1. Agregar al carrito. \n2. Ver inventario \n3. Buscar Moto \n4. Ver Carrito \n5. Elimianr articulo del carrito \n6. Salir'))

    switch(respuesta){
        case 1: 
            let carritoID = parseInt(prompt('Coloque el numero de ID de la moto'));
            agregarAlCarrito(carritoID);
        break;

        case 2: 
            alert('Actualmente contamos con: ' + Motos.length + ' Motos en nuestro inventario');

            let indice = ""

            Motos.forEach((moto, ID) => {
                
                indice += `${ID + 1}. ${moto}\n`;

                return indice;
            });

            alert(indice) 
            
        break;

        case 3: 
            let motoBuscar = prompt('Que moto buscas?').toUpperCase()
            BuscarMoto(motoBuscar);        
        break;

        case 4: 
            alert('En su carrito usted cuenta con: ' + carrito.length + ' articulos.')
            verCarrito();   
        break;

        case 5:
            editarCarrito();
        break;

        case 6:
            alert('Gracias, hasta la proxima!')
        break;

        default: 
        alert('Esa opcion no esta en el menu')
    }

    return respuesta;
}

function BuscarMoto(motoBuscar){
    
    if(Motos.includes(motoBuscar)){

        let IDmoto = Motos.indexOf(motoBuscar) + 1;

        alert("El ID de la moto que busca es: " + IDmoto)
        
    }else{
        alert('Esa moto no se encuentra en el inventario')
    }
}

function agregarAlCarrito(carritoID){

    if(carritoID >= 1 && carritoID <= Motos.length){
        
        alert('Moto Agregada al carrito exitosamente!')
    
        carrito.push(Motos[carritoID - 1])

        console.log(carrito)

    }else{
        alert('Esa Moto No esta en nuestro inventario, consultelo.')
    }

}

function editarCarrito(){

    let idEliminar = parseInt(prompt('Porfavor coloque el id del articulo a eliminar: '))
    idEliminar = idEliminar - 1
    carrito.splice(idEliminar, 1)

    alert('Articulo eliminado con exito!')
}

function verCarrito(){

    let listaCarrito = ""

    carrito.forEach((articulo, ID) => {
                
        listaCarrito += `${ID + 1}. ${articulo}\n`;

        return listaCarrito;
    });

    alert(listaCarrito) 
}



alert('Bienvenido A SuperBikes.')

alert('Noticia: Tenemos motos nuevas en nuestro inventario!')

let respuesta;

do{
    
    respuesta = menuPrincipal();

}while(respuesta != 6)