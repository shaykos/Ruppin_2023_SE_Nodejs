const DB = require('../utils/db');

class PokemonModel {

    static async GetAllPlayers() {
        return await new DB().FindAll('players');
    }

    static async InsertPokemons(pokemons) {
        return await new DB().Insert('pokemons', pokemons);
    }

    static async FindPokemonsByFamily(family) {
        let query = { family: family };
        return await new DB().FindAll('pokemons', query);
    }

    static async DeletePokemon(id){
        return await new DB().Deactive('pokemons', id);
    }

    static async ReactivePokemon(id){
        return await new DB().Reactive('pokemons', id);
    }

}

module.exports = PokemonModel;