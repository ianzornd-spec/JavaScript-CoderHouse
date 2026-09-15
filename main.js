//Compra de Videojuegos...

const usuario = prompt('Bienvenido al sistema interbancario. Porfavor ingrese su usuario: ')

let saldoCajero = 500;
let respuesta;

function Saludo(){

    alert('Bienvenido ' + usuario + ' al sistema interbancario')
    operacion();

}

function operacion(){
     respuesta = parseInt(prompt('Que operacion desea hacer hoy: \n1. Transferir \n2. Retirar \n3. Consultar Saldo \n4. Ingresar saldo \n5. Salir del Sistema'));
    
        switch(respuesta){

        case 1:
            Transferir(saldoCajero);
        break;

        case 2:
            Retirar(saldoCajero);
        break;

        case 3:
            alert('Su saldo actual es de: $' + saldoCajero);
            
        break;

        case 4:
            const saldoNuevoIngresado = parseInt(prompt('Ingrese el saldo que desea agregar: '))

            if (saldoNuevoIngresado >= 0){
                alert('Su nuevo saldo ahora es de: $' + saldoNuevo(saldoCajero, saldoNuevoIngresado));
                saldoCajero = saldoNuevo(saldoCajero, saldoNuevoIngresado);

            } else{
                alert('No puede realizar ese tipo de monto.')
            }

        break;

        case 5:
            alert('Hasta la proxima :)')
        break;

        default: 
            alert('Esa operacion no existe porfavor selecciona otra');

        }
}

function Transferir(Saldo){

    let transferenciaDestinatario = prompt("Ingrese el nombre de a quien quiere transferirle dinero: ");
    let CantidadTransferencia = parseInt(prompt('Ingrese la cantidad que desea transferir: '));

    if(CantidadTransferencia >= 1){

        if(CantidadTransferencia <= Saldo){
            alert("Transferencia realizada exitosamente a " + transferenciaDestinatario);
            saldoCajero = saldoTransferir(saldoCajero, CantidadTransferencia);
            alert("Su saldo final es de: $" + saldoCajero)
            
        } else {
            alert("La cantidad puesta supera el saldo con el que usted cuenta.")
            
        }
            } else{
            alert("No puedes realizar esta operacion con ese monto.")
        
        }

    return transferenciaDestinatario;
}

function Retirar(Saldo){
    let CantidadRetirar = parseInt(prompt('Ingrese la cantidad que desea retirar.'))
    if(CantidadRetirar <= 0){
        alert('Operacion invalida. Cantidad a retirar Invalida.')
        
    } else{

        if(CantidadRetirar <= Saldo){
            saldoCajero = saldoRetirar(saldoCajero, CantidadRetirar);
            alert('Retiro realizado con éxito. Su nuevo saldo es de: $' + saldoCajero)
            
        } else{
            alert('La cantidad que deseas retirar supera el saldo con el que cuentas.')

        }
    }
}

const saldoNuevo = (saldoCajero, saldoNuevoIngresado) => saldoCajero + saldoNuevoIngresado;
const saldoTransferir = (saldoCajero, CantidadTransferencia) => saldoCajero - CantidadTransferencia;
const saldoRetirar = (saldoCajero, CantidadRetirar) => saldoCajero - CantidadRetirar;

Saludo();

do{

operacion();

} while(respuesta !== 5)