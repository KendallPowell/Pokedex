import { appState } from "../AppState.js";
import { Pokeman } from "../Models/Pokeman.js";
import { pokemansService } from "../Services/PokemansService.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawWildPokemans() {
  let pokemon = appState.wildPokemans
  let template = ''
  pokemon.forEach(p => template += Pokeman.ListTemplate(p))
  setHTML('api-pokemon', template)
}


export class PokemansController {
  constructor() {
    // console.log('controller working');
    appState.on('wildPokemans', _drawWildPokemans)
    this.getPokemans()
  }

  async getPokemans() {
    try {
      await pokemansService.getPokemans()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async getPokemonDetail(name) {
    try {
      await pokemansService.getPokemonDetail(name)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

}