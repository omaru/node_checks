import { httpClientPlugin as http } from "../plugins/http-client.plugin";

export const getPokemonById = async (id: number): Promise<string> => {
    try {
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;
    } catch (err) {
        throw `Pokemon with id ${id} not found`;
    }

}
