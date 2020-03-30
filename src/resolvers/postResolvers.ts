const postResolvers = {
  Query: {
    post: async (_: any, { id }: any) => {
      return id;
    },
    posts: async () => {
      return [{}];
    }
  },
  Mutation: {
    addPost: async (_: any, post: any) => {
      return post;
    },
    updatePost: async (_: any, post: any) => {
      return post;
    },
    deletePost: async (_: any, id: String) => {
      return id;
    }
  }
};

export {
  postResolvers,
};