const PetsService = require('../src/services/pets.service');

const dbStub = {
  readDocuments: () => [
      {
        id: 1,
        name: 'Perrito',
        breed: 'Poodle',
        owner: 'Miguel',
      },
      {
        id: 2,
        name: 'Gato',
        breed: 'Siamese',
        owner: 'Laura',
      },
    ]
};

jest.mock('../src/services/dynamodb.service.js', () => jest.fn().mockImplementation(() => dbStub));

describe('Test for petsService', () => {
  let service;
  beforeEach(() => {
    service = new PetsService();
  });

  describe('test for readPets', () =>{

    test('should return a list of pets', async () => {
      const pets = await service.readPets();
      expect(pets.length).toEqual(2);
     });
  });
});
