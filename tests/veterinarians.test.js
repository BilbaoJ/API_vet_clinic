const VeterinariansService = require('../src/services/veterinarians.service');

const dbStub = {
  readDocuments: () => [
      {
        id: 1,
        name: 'Juan',
        phone: '3126564767',
        shift: 'Noche'
      }
    ]
};

jest.mock('../src/services/dynamodb.service.js', () => jest.fn().mockImplementation(() => dbStub));

describe('Test for veterinariansService', () => {
  let service;
  beforeEach(() => {
    service = new VeterinariansService();
  });

  describe('test for readVeterinarians', () =>{

    test('should return a list of veterinarians', async () => {
      const veterinarians = await service.readVeterinarians();
      expect(veterinarians.length).toEqual(1);
     });
  });
});
