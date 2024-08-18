"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (err) {
        throw `Pokemon with id ${id} not found`;
    }
};
exports.getPokemonById = getPokemonById;
