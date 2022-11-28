import { PokemansController } from "./Controllers/PokemansController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  pokemansController = new PokemansController();
}

window["app"] = new App();
