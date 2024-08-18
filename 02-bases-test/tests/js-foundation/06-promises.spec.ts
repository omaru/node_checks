import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises.spec.ts', () => {
    it('getPokemonById should reutrn a pokemon name', async () => {
        const pokemon = 1;
        const result = await getPokemonById(pokemon);
        expect(result).toBe('bulbasaur');
    }),
    it('getPokemonById should throw an error if pokemon does not exist', async () => {
            const pokemon = 999999999999999999999;
            try {
                await getPokemonById(pokemon);
                fail('Should have thrown an error');
            } catch (err) {
                expect(err).toBe(`Pokemon with id ${pokemon} not found`);
            }
    })
});