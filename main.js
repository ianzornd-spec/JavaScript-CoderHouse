const IVA = 0.16;

class Moto {


    constructor(id, marca, modelo, year, stock, precio){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.stock = stock;
        this.precio = precio;
    }

    IVAconsulta(){
        return this.precio * IVA;
    }

    restarMotoInventario(unidadesCompradas){
        if(unidadesCompradas > 0 && unidadesCompradas <= this.stock){
            this.stock = this.stock - unidadesCompradas;
        }else{
            alert('Insuficientes motos en stock!');
        }
    }





};

const honda = new Moto(1, 'HONDA', 'Honda CBR1000RRR', 2025, 23, 233000)

const yamaha = new Moto(2, 'YAMAHA', 'Yamaha MT-07', 2026, 5, 135000)

const ktm = new Moto(3, 'KTM', 'KTM 1390 SuperDuke', 2026, 12, 449999)

const ducati = new Moto(4, 'DUCATI', 'Ducati Diavel', 2025, 9, 850000)

const catalogo = [honda, yamaha, ktm, ducati]

function unidadConsultaIVA(){
    let motoBuscarIDIVA = parseInt(prompt("Ingrese el ID de la MOTO: "));
    let motoBuscada = catalogo.find(moto => moto.id === motoBuscarIDIVA)
    if(motoBuscada){
        alert(`ID: ${motoBuscada.id} - MODELO: ${motoBuscada.modelo} - AÑO: ${motoBuscada.year} - COSTO DE IVA: $${motoBuscada.IVAconsulta()} `)
    }else{
        alert(`La moto con ID: ${motoBuscarIDIVA}, no esta en el catalogo...`)
    }
    
}

function filtro(){
    let respuesta1 = parseInt(prompt(`Que tipo de filtro deseas utilizar? \n1. Precio \n2. Año`));

    switch(respuesta1){
        case 1:
            let inventarioFiltro = "";
            
            let precioFiltro = parseInt(prompt(`Buscar motos con precio menor a: `))
            let motosBaratas = catalogo.filter(moto => moto.precio <= precioFiltro)

            if(motosBaratas.length > 0){
            motosBaratas.forEach( moto => { inventarioFiltro +=
            `ID: ${moto.id} - MODELO: ${moto.modelo} - AÑO: ${moto.year} - STOCK: ${moto.stock} - PRECIO: $${moto.precio} \n`;   
            return inventarioFiltro; })
            alert(inventarioFiltro);
            }else{
                alert('No existe alguna unidad con ese precio')
            }
        break;
        
        case 2:
            let inventairoFiltroYear = "";

            let FiltroYear = parseInt(prompt(`Buscar motos del año _ en adelante. `))
            let motosNuevas = catalogo.filter(moto => moto.year >= FiltroYear)

            if(motosNuevas.length > 0){
            motosNuevas.forEach( moto => { inventairoFiltroYear +=
            `MODELO: ${moto.modelo} - AÑO: ${moto.year} - STOCK: ${moto.stock}\n`;   
            return inventairoFiltroYear; })
            alert(inventairoFiltroYear);
            }else{
                alert('No existe alguna unidad de ese año!')
            }

        break;

        default: alert('Esa opcion de filtro no existe!')
    }
}

function modelosLista(){
    const motosModelos = catalogo.map(moto => `Modelo: ${moto.modelo}`).join('\n')
    alert(motosModelos)
}

function comprarMoto() {
    const id = parseInt(prompt('Ingrese el ID de la moto a comprar: '));
    let motoEncontrada = null;

    motoEncontrada = catalogo.find(moto => moto.id === id)

    if (motoEncontrada) {
        const cantidad = parseInt(prompt(`Que Cantidad ${motoEncontrada.modelo} desea comprar?`));
        motoEncontrada.restarMotoInventario(cantidad);
        alert(`Stock actual de ${motoEncontrada.modelo}: ${motoEncontrada.stock}`);
    } else {
        alert('Ese ID no existe!');
    }
}

function menuPrincipal(){
    let respuesta = parseInt(prompt('Bienvenido a HyperBikes \n1. Mostrar inventairo \n2. Consultar IVA de moto por ID \n3. Filtro \n4. Consultar Modelos en existencia \n5. Comprar Moto \n6. Salir'))
    switch(respuesta){
        case 1:
            let inventarioCompleto = "";
            catalogo.forEach( moto => { inventarioCompleto += 
                `ID: ${moto.id} - MODELO: ${moto.modelo} - AÑO: ${moto.year} - STOCK: ${moto.stock} - PRECIO: $${moto.precio} \n`; 
                return inventarioCompleto; })
            alert(inventarioCompleto);
        break;

        case 2:
            unidadConsultaIVA()
        break;

        case 3:
             filtro();
        break;

        case 4:
            modelosLista();
        break;
        
        case 5:
             comprarMoto();
        break;

        case 6:
             alert('Hasta la proxima!')
        break;

        default: alert('Esa opcion no esta en el menu!');
    }

    return respuesta;
}

let respuesta;

menuPrincipal()

do{
    respuesta = menuPrincipal();
} while(respuesta != 6)