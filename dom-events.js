
let muestra = document.createElement("div")
let mostrarEquipo = document.createElement("div")
let mostrarTeam = document.getElementById("mostrarTeam")
let pokedex = document.getElementById("pokedex")
let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")
let pokedex151 = []


/*Interaccion con el usuario por SA*/
pokedex.addEventListener("click", (event) => {
    if (event.target.matches(".pokemon-card")) {
     if(team.length<6)  {
      team.push(pokedex151[event.target.id])
        GuardarEnLocal()
        swal.fire(`Elegiste a ${pokedex151[event.target.id].name}`)
        LimpiarMuestra()
  equipo_creado(team)}
     else {
      Swal.fire({
        title: 'Tu equipo esta lleno',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Mostramelo',
        denyButtonText: `Borralo`,
      }).then((result) => {
        
        if (result.isConfirmed) {
          LimpiarMuestra()
          Swal.fire(`Lo vas a encontrar arriba de la pokedex`);
          
            equipo_creado(team);
         
        } else if (result.isDenied) {
          Swal.fire(`El equipo se ha borrado`)
          team.length = 0
        }
      })
    }
  }});

/*limpieza visual rapida*/
  boton.addEventListener("click",()=>
  {
    LimpiarMuestra()
    reinicio()
  })

