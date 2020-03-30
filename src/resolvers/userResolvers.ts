import { user } from 'entities';

const userResolvers = {
  Query: {
    user: async (_: any, { id }: any) => await user.findByIds(id),
    users: async () => await user.find({})
  },
  Mutation: {
    addUser: async (_: any, _user: any) => await user.insert(_user),
    updateUser: async (_: any, _user: any) => {
      return _user;
    },
    deleteUser: async (_: any, id: String) => {
      return id;
    }
  }
};

export {
  userResolvers,
};