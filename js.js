
//DOM, Eventos y Storage
let charmander = document.getElementById("charmander")
let bulbasaur = document.getElementById("bulbasaur")
let squirtel = document.getElementById("squirtle")
let equipoPrevio = document.getElementById("equipoPrevio")


let equipo = []
let equipo2 = JSON.stringify(equipo)
let equipo3 = localStorage.getItem("equipo")
let equipoParseado = JSON.parse(equipo3)
var muestra = document.createElement("div")




charmander.onclick = () => {
    Swal.fire('elegiste a charmander!')
    equipo.push("charmander")
    localStorage.setItem("equipo", JSON.stringify(equipo))
   
}
bulbasaur.onclick =() => {
    Swal.fire('elegiste a bulbasaur!')
    equipo.push("bulbasaur")
    localStorage.setItem("equipo", JSON.stringify(equipo))
  
}
squirtel.onclick =() => {
    Swal.fire('elegiste a squirtel!')
    equipo.push("squirtel")
    localStorage.setItem("equipo", JSON.stringify(equipo))
   
}
if (equipoParseado.length!=0){
    equipoPrevio.appendChild(muestra)
    muestra.innerHTML=` <p> ya tenes un equipo, clickea sobre las card para hacer otro  </p>`
}

// la idea a partir de ahora es ya fetchear la PokeAPI y generar todas cards usando sus valores armando todo el html dinamico desde dom.
// tambien quiero que se pueda armar y eliminar un equipo pudiendo clickear un boton y que se vean
