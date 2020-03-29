const petResolvers = {
  Query: {
    pets: async (_: any, { userID }: any) => {
      return [{}]
    }
  },
  Mutation: {
    addPet: async (_: any, pet: any) => {
      return pet
    },
    updatePet: async (_: any, pet: any) => {
      return pet
    },
    deletePet: async (_: any, id: String) => {
      return id
    }
  }
};

export {
  petResolvers,
};