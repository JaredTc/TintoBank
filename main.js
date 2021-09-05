function mostrarTarjeta() {

    var tarjetaInicio = document.getElementById('tarjeta-de-inicio')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')

    tarjetaInicio.classList.add('d-none')
    tarjetaSaldo.classList.remove('d-none')
}

function AbrirCuenta(event) {
    event.preventDefault()

    var inputEmail = document.getElementById('sald')
    var total = inputEmail.value
    localStorage.setItem('saldo',total)

    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total

    mostrarTarjeta()
}


function cerrarSesion(event) {
    event.preventDefault()
    //Obtenemos los id de las tarjetas
    var tarjetaInicio = document.getElementById('tarjeta-de-inicio')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
//Ocultamos la tarjeta de saldo
    tarjetaSaldo.classList.add('d-none')
    tarjetaInicio.classList.remove('d-none')
    limpiarFormulario()
    localStorage.removeItem('saldo')
} 

function limpiarFormulario() {
    var inputNombre = document.getElementById('nomb')
    var inputSaldo = document.getElementById('sald')
    var inoutConsigna = document.getElementById('cantidad')
    var inputRetiro = document.getElementById('retiro')
    inputRetiro.value = ""
    inputNombre.value = ""
    inputSaldo.value = ""
    inoutConsigna.value =""
}

function revisarInicioDeSesion() {
    var usuario = localStorage.getItem('saldo')
    if (usuario !== null) {
    mostrarTarjeta()
    }
}

revisarInicioDeSesion()

function consignar(event){
    event.preventDefault()
    // prompt("Ingresa el monto a consignar")

    var tarjetaConsignacion = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.add('d-none')
    tarjetaConsignacion.classList.remove('d-none')
}

function Retirar(event){
    event.preventDefault()
    // prompt("Ingrese el monto a Retirar")
    var tarjetaConsignacion = document.getElementById('tarjeta-Retiro')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.add('d-none')
    tarjetaConsignacion.classList.remove('d-none')
}



function cancelar(){
    var tarjetaRetiro = document.getElementById('tarjeta-Retiro')
    var tarjetaConsignacion = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    tarjetaRetiro.classList.add('d-none')
    tarjetaConsignacion.classList.add('d-none')
}


function Aceptarconsigna(event){
    var tarjetaConsigna = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    tarjetaConsigna.classList.add('d-none')



    var valor = document.getElementById('cantidad')
    var sal = valor.value
    var sald = document.getElementById('sald')
    var val = sald.value
    var total = val - sal
 

    localStorage.setItem('saldo',total)
    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total

    limpiarFormulario()

    if (total === 0){
        alert('Su cuenta ha quedado en 0, no puede hacer mas movimientos')

    }

}

function AceptarRetiro( event ){
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    var tarjetaRetiro = document.getElementById('tarjeta-Retiro')
    tarjetaRetiro.classList.add('d-none')

    var valor = document.getElementById('retiro')
    var sal = valor.value
    var sald = document.getElementById('sald')
    var val = sald.value
    var total = val - sal

    localStorage.setItem('saldo',total)
    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total


    limpiarFormulario()

    if (total === 0){
        alert('Su cuenta ha quedado en 0, no puede hacer mas movimientos')

    }


}