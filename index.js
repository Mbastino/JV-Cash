class Banco {
    constructor(id,nombre, tasa12, tasa24, tasa36, tasa48) {
        this.id=id
        this.nombre=nombre
        this.tasa12=tasa12  
        this.tasa24=tasa24
        this.tasa36=tasa36
        this.tasa48=tasa48
    }   
}
const bankCordoba = new Banco(1,'Banco de Cordoba',12,21,36,42)
const bbva = new Banco(2,'BBVA',14,24,35,45)
const icbc = new Banco(3,'ICBC',15,23,37,44)
 
console.log(bankCordoba, bbva, icbc)

let seleccionBanco = parseInt(prompt('Ingresa el banco con el que deseas trabajar 1.Banco de Cordoba 2.BBVA 3.ICBC'))

let escogioBanco = false
let infoBanco

while (escogioBanco) {
    if (seleccionBanco === bankCordoba.id){
        escogioBanco = true
        infoBanco = bankCordoba
    } else if(seleccionBanco === bbva.id){
        escogioBanco = true
        infoBanco = bbva
    } else if(seleccionBanco === icbc.id){
        escogioBanco = true
        infoBanco = icbc
    } else {
        seleccionBanco = parseInt(prompt('Selecciona una de las opciones correctas 1.Banco de Cordoba 2.BBVA 3.ICBC'))
    }
}
console.log(infoBanco)