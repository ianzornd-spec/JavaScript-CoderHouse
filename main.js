//Hola profe una disculpa por la entrega atrasada tuve unos temillas en casa pero nada grave todo Fine, queria comentarle
// al momento de los precios y eso cuando me retorna me da muchos decimales entonces busque y me aparecio la funcion .toFixed.
// Que tenga buena tarde, noche o dia profe! suerte!

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

    calculadorCostoSeguro(){
        return (this.precio * 0.07).toFixed(2);
    }

    motoPrecioFinal(){
        return (this.precio * 0.07) + (this.precio * IVA) + this.precio;
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
    let inventarioIVA = "";

    catalogo.forEach( moto => { inventarioIVA += 
    `ID: ${moto.id} - MODELO: ${moto.modelo} - IVA del 16%: $${moto.IVAconsulta()} \n`; 
    return inventarioIVA; })
    
    alert(inventarioIVA);
}

function costoSeguro(){
    let inventarioSeguro = "";

    catalogo.forEach( moto => { inventarioSeguro += 
    `ID: ${moto.id} - MODELO: ${moto.modelo} - Precio de Seguro: $${moto.calculadorCostoSeguro()} \n`; 
    return inventarioSeguro; })
    
    alert(inventarioSeguro);
}

function precioFinalConsulta(){
    let precioFinal = "";

    catalogo.forEach( moto => { precioFinal += 
    `ID: ${moto.id} - MODELO: ${moto.modelo} - Precio FINAL: $${moto.motoPrecioFinal()} \n`; 
    return precioFinal; })
    
    alert(precioFinal);
}

function comprarMoto() {
    const id = parseInt(prompt('Ingrese el ID de la moto a comprar: '));
    let motoEncontrada = null;

    for (const moto of catalogo) {
        if (moto.id == id) {
            motoEncontrada = moto;
        }
    }

    if (motoEncontrada) {
        const cantidad = parseInt(prompt(`Que Cantidad ${motoEncontrada.modelo} desea comprar?`));
        motoEncontrada.restarMotoInventario(cantidad);
        alert(`Stock actual de ${motoEncontrada.modelo}: ${motoEncontrada.stock}`);
    } else {
        alert('Ese ID no existe!');
    }
}

function menuPrincipal(){
    let respuesta = parseInt(prompt('Bienvenido a HyperBikes \n1. Mostrar inventairo \n2. Ver IVA de cada moto \n3. Consultar costo de seguro de unidad \n4. Consultar Precios Finales (IVA + SEGURO) \n5. Comprar Moto \n6. Salir'))
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
             costoSeguro();
        break;

        case 4:
            precioFinalConsulta();
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