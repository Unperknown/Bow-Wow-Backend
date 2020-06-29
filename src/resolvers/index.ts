const pet = {
  pid: 1,
  name: 'Wow'
};

const pets = [
  {
    pid: 2,
    name: 'B',
  }, {
    pid: 3,
    name: 'C',
  }
];

const resolvers = {
  Query: {
    pet: (_: any, { pid }: any) => pet,
    pets: () => pets,
  },
  Mutation: {
    createPet: (_: any, { pid, name }: any) => pet,
  },
};

export { resolvers };