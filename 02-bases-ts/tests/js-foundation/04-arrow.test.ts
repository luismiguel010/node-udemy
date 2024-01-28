import { getUserById } from "../../src/js-foundation/04-arrow";

describe('js-foundation/04-arrow', () => {
  
test('getUserById should return an error if the user is not found', (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    })
  });

  test('getUserById should return John Doe', (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      });
      done();
    })
  });
  
  test('getUserById should return Jane Doe', (done) => {
    const id = 2;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 2,
        name: 'Jane Doe',
      });
      done();
    })
  });
  
});