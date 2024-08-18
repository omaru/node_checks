import { getUserById } from '../../src/js-foundation/03-callbacks';
describe('js-foundation/03-callbacks.spec.ts', () => {

    it('getUserById should return an error if user does not exist', () => {
        const id = 10;
        getUserById(id, (err: any, user: any) => {
            console.log(err, user);
            expect(err).toBe(`User with id ${id} not found`);
            expect(user).toBeUndefined();
        });
    });
    it('getUserById should return user', (done) => {
        const id = 1;
        getUserById(id, (err: any, user: any) => {
            expect(err).toBeNull();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe'
            });
            done();
        });
    });
});
