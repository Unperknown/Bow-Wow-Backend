const resolvers = {
  Query: {
    pet: (_: any, { pid }: any) => {},
    pets: () => <any>[],
  },
  Mutation: {
    createPet: (_: any, { pid, name }: any) => {},
  },
};

export { resolvers };