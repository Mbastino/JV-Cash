/* class Usuario {
    constructor(nombreyapellido,telefono,email){
        this.nombreyapellido = nombreyapellido
        this.telefono =  telefono
        this.email = email
    }
}
 */
class Banco {
    constructor(id,nombre, tasa12, tasa24, tasa36, tasa48) {
        this.id = id
        this.nombre = nombre
        this.tasa12 = tasa12  
        this.tasa24 = tasa24
        this.tasa36 = tasa36
        this.tasa48 = tasa48
    }   
}

const bankCordoba = new Banco(0, 'Banco de Cordoba', 12, 21, 36, 42)
const bbva = new Banco(1, 'BBVA', 14, 24, 35, 45)
const icbc = new Banco(2, 'ICBC', 15, 23, 37, 44)
const jvcash = new Banco(3, 'JV Cash', 17, 26, 39, 50)
 
const bancos = [bankCordoba,bbva,icbc]

bancos.push(jvcash)
/* console.log(bancos) */

let bancoOfrecidos = 'Ingresa el banco con el que deseas trabajar: '

function trabajarCon(){
    for (bank of bancos){
        bancoOfrecidos +=` \n ${bank.id} - ${bank.nombre}: \n Tasa para 12 cuotas: ${bank.tasa12}% \n Tasa para 24 cuotas: ${bank.tasa24}% \n Tasa para 36 cuotas: ${bank.tasa36}% \n Tasa para 48 cuotas: ${bank.tasa48}% `
    }

    let respuesta = parseInt(prompt(bancoOfrecidos)) 
}

trabajarCon()

let escogioBanco = false 
let infoBanco

while (trabajarCon === false) {
    if (bancoOfrecidos === bankCordoba.id){
        trabajarCon = true
        infoBanco = bankCordoba
    } else if(bancoOfrecidos === bbva.id){
        trabajarCon = true
        infoBanco = bbva
    } else if(bancoOfrecidos === icbc.id){
        trabajarCon = true
        infoBanco = icbc
    } else if(bancoOfrecidos === jvcash.id){
        trabajarCon = true
        infoBanco = jvcash
    } else {
        bancoOfrecidos = parseInt(prompt('Selecciona una de las opciones correctas 1.Banco de Cordoba 2.BBVA 3.ICBC 4.JV Cash'))
    }
} 

const montoPrestamo = parseInt(prompt('Imgresa el monto que necesita'))

const cuotaMensual = (valor,interes,meses) => {
    const cuota = (valor + (valor*interes)/100)/meses
    return cuota
}  


const cuota12 = cuotaMensual(montoPrestamo,infoBanco.tasa12,12)
const cuota24 = cuotaMensual(montoPrestamo,infoBanco.tasa24,24)
const cuota36 = cuotaMensual(montoPrestamo,infoBanco.tasa36,36)
const cuota48 = cuotaMensual(montoPrestamo,infoBanco.tasa48,48)


alert(`Las opciones que te ofrece ${infoBanco.nombre} son: 12 cuotas de ${cuota12.toFixed(2)} pesos - 24 cuotas de ${cuota24.toFixed(2)} pesos - 36 cuotas de ${cuota36.toFixed(2)} pesos - 48 cuotas de ${cuota48.toFixed(2)} pesos`)
