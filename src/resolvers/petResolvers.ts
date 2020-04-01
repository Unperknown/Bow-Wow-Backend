import { pet } from 'entities';

const petResolvers = {
  Query: {
    pets: async (_: any, { userID }: any) => await pet.findByIds(userID)
  },
  Mutation: {
    addPet: async (_: any, { _pet }: any) => await pet.insert(_pet),
    updatePet: async (_: any, { id, _pet }: any) => await pet.update(id, _pet),
    deletePet: async (_: any, { id }: any) => await pet.delete(id)
  }
};

export {
  petResolvers,
};