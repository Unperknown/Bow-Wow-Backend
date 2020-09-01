const resolvers = {
  Query: {
    me: () => {},
    myPets: () => {},
    hospitals: (_: any, { coordinate }: any) => {
      return coordinate;
    },
    diagnosis: (_: any, { petId }: any) => {
      return petId;
    },
  },
};

export { resolvers };