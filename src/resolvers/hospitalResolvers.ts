const hospitalResolvers = {
  Query: {
    hostpital: async (_: any, { id }: any) => {
      return id
    },
    hostpitals: async () => {
      return [{}]
    }
  },
  Mutation: {
    addHostpital: async (_: any, hostpital: any) => {
      return hostpital
    },
    updateHostpital: async (_: any, hostpital: any) => {
      return hostpital
    },
    deleteHostpital: async (_: any, id: String) => {
      return id
    }
  }
};

export {
  hospitalResolvers,
};