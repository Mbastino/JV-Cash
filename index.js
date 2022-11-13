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
const jvcash = new Banco(3,'JV Cash', 17, 27, 40, 50)
 
/* console.log(bankCordoba, bbva, icbc) */

const bancos = [bankCordoba,bbva,icbc]

bancos.push(jvcash)

console.log(bancos.length)
console.log(bancos.includes(jvcash))

let seleccionBanco = parseInt(prompt('Ingresa el banco con el que deseas trabajar 0.Banco de Cordoba 1.BBVA 2.ICBC 3.JV Cash'))

let escogioBanco = false 
let infoBanco

while (escogioBanco === false) {
    if (seleccionBanco === bancos[0].id){
        escogioBanco = true
        infoBanco = bancos[0]
    } else if(seleccionBanco === bancos[1].id){
        escogioBanco = true
        infoBanco = bancos[1]
    } else if(seleccionBanco === bancos[2].id){
        escogioBanco = true
        infoBanco = bancos[2]
    } else if(seleccionBanco === bancos[3].id){
        escogioBanco = true
        infoBanco = bancos[3]
    } else {
        seleccionBanco = parseInt(prompt('Selecciona una de las opciones correctas 0.Banco de Cordoba 1.BBVA 2.ICBC 3.JV Cash'))
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

/* console.log(cuota12,cuota24,cuota36,cuota48)*/

alert(`Las opciones que te ofrece ${infoBanco.nombre} son: 12 cuotas de ${cuota12.toFixed(2)} pesos - 24 cuotas de ${cuota24.toFixed(2)} pesos - 36 cuotas de ${cuota36.toFixed(2)} pesos - 48 cuotas de ${cuota48.toFixed(2)} pesos`)
