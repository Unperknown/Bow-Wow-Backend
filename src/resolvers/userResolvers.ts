const userResolvers = {
  Query: {
    user: async (_: any, { id }: any) => {
      return id
    },
    users: async () => {
      return [{}]
    }
  },
  Mutation: {
    addUser: async (_: any, user: any) => {
      return user
    },
    updateUser: async (_: any, user: any) => {
      return user
    },
    deleteUser: async (_: any, id: String) => {
      return id
    }
  }
};

export {
  userResolvers,
};