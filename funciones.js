/*carga la pokedex*/
function MostrarPokedex(arr){
    
    for (let i = 0 ; i<arr.length;i++ ) {

        muestra.classList.add("box");
        muestra.innerHTML += `
        <div class="pokemon-card caja"  id="${arr[i].id-1}" >
        <img src="${arr[i].front_default}" class="pokemon-card img" id="${arr[i].id-1}"  alt="${arr[i].name}">
        <h2 class="pokemon-card texto"  id="${arr[i].id-1}" >${arr[i].name} #${arr[i].id}</h2>
        <div>
        `
     
    }
    pokedex.appendChild(muestra)
}

/*crea objetos pokemon*/
class Pokemon {

    constructor(id,name,image){


        this.id = id;
        this.name = name;
        this.image = image;      

    }
}
function crear_pokemon (arr) {


    for (let i = 0 ; i<arr.length;i++ ) {
    let id = arr[i].id;
    let name = arr[i].name;
    let imagen = arr[i].front_default;

    let pokemon_nuevo =  new Pokemon (id,name,imagen);
    pokedex151.push(pokemon_nuevo);  

    
    }

}
/*muestra el equipo creado*/
function equipo_creado(arr) {
  for (let i = 0 ; i<arr.length; i++){
    mostrarEquipo.classList.add("box2");
    mostrarEquipo.innerHTML += `
    <div class="pokemon-card caja2"  id="${arr[i].id-1}" >
    <img src="${arr[i].image}" class="pokemon-card img" id="${arr[i].id-1}"  alt="${arr[i].name}">
    <h2 class="pokemon-card texto"  id="${arr[i].id-1}" >${arr[i].name} #${arr[i].id}</h2>
    <div>`}
    mostrarTeam.appendChild(mostrarEquipo)
  }

  /*revisa el storage y carga el equipo*/
  function YaHayEquipo(){
    
    if(equipoDeStorage){
        swal.fire(`ya hay un equipo previo, de tu ultima sesion`)
        equipo_creado(equipoDeStorage)

    }
  }
  YaHayEquipo()