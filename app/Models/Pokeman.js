

export class Pokeman {
  constructor() {

  }

  static ListTemplate(pokemon) {
    return `
    <div class="col-12 selectable p-1" onclick="app.pokemansController.getPokemonDetail('${pokemon.name}')">${pokemon.name}</div>
    `
  }

}