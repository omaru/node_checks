import {httpClientPlugin as http} from "../plugins/http-client.plugin";

export const getPokemonById = (id: number): Promise<string> => {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return http.get(url).then((pokemon) => pokemon.name);
}
