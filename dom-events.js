
let muestra = document.createElement("div")
let mostrarEquipo = document.createElement("div")
let mostrarTeam = document.getElementById("mostrarTeam")
let pokedex = document.getElementById("pokedex")

let pokedex151 = []

pokedex.addEventListener("click", (event) => {
    if (event.target.matches(".pokemon-card")) {
     if(team.length<6)  {
      team.push(pokedex151[event.target.id])
        GuardarEnLocal()
        swal.fire(`Elegiste a ${pokedex151[event.target.id].name}`)}
     else {
      Swal.fire({
        title: 'Tu equipo esta lleno',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Mostramelo',
        denyButtonText: `Borralo`,
      }).then((result) => {
        
        if (result.isConfirmed) {
          
          Swal.fire(`Lo vas a encontrar arriba de la pokedex`)
          equipo_creado(team)
        } else if (result.isDenied) {
          Swal.fire(`El equipo se ha borrado`)
          team.length = 0
        }
      })
    }
  }});