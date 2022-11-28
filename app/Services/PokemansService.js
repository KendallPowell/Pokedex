import { appState } from "../AppState.js"
import { Pokeman } from "../Models/Pokeman.js";



const pokedexApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

class PokemansService {
  async getPokemonDetail(name) {
    const res = await pokedexApi.get(`pokemon/${name}`)
    console.log('[GET ONE POKEMON]', res.data);
  }
  async getPokemans() {
    const res = await pokedexApi.get('pokemon?limit=151')
    console.log('[POKEDEX GATHERED]', res.data)
    appState.wildPokemans = res.data.results
  }


}

export const pokemansService = new PokemansService()