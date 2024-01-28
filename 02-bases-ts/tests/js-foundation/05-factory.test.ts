import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {

  const getUUID = () => '1234';
  const getAge = () => 35;

  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({getUUID, getAge});
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should return a person object', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDone = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });
    expect(johnDone).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 35,
    });
  });

});