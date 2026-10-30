let motos = [
    { id: 1,
      marca: 'KTM',
      modelo: 'SUPERDUKE',
      precio: 420000,
    },

    { id: 2,
      marca: 'Italika',
      modelo: 'DM300',
      precio: 18000,
    },

    { id: 3,
      marca: 'Vento',
      modelo: 'STORM',
      precio: 33000,
    },

    { id: 4,
      marca: 'BMW',
      modelo: 'S1000RR',
      precio: 580000,
    },
    
    { id: 5,
      marca: 'Ducati',
      modelo: 'PANIGALE',
      precio: 850000,
    },
]

const listaMotos = document.getElementById('Inventario');

function listaInventario (){
    listaMotos.innerHTML = "";
    motos.forEach(moto =>{
        listaMotos.innerHTML += 
        `<div class = "moto">
            <h3>Marca: ${moto.marca} / Modelo: ${moto.modelo}</h3>
            <p>Precio: $ ${moto.precio}</p>
            <button onclick="eliminar(${moto.id})" class="boton-eliminar">Eliminar</button>
        </div>
        `
    });
}

listaInventario();

const motoNuevaMarca = document.getElementById('marca');

const motoNuevaModelo = document.getElementById('modelo');

const motoNuevaPrecio = document.getElementById('precio');

const motoNuevaBoton = document.getElementById('boton-agregar');

const eliminarBoton = document.getElementById('botonEliminar');

motoNuevaBoton.addEventListener('click', () =>{

    const nuevaMoto = {
      id: motos.length + 1,
      marca: motoNuevaMarca.value,
      modelo: motoNuevaModelo.value,
      precio: motoNuevaPrecio.value,
    }
    
    motos.unshift(nuevaMoto);
    
    listaInventario();

});

function eliminar(id){
    motos = motos.filter(moto => moto.id !== id)
    listaInventario();
}

//bt-eliminar