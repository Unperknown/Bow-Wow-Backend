import { post } from 'entities';

const postResolvers = {
  Query: {
    post: async (_: any, { id }: any) => await post.findByIds(id),
    posts: async () => await post.find({})
  },
  Mutation: {
    addPost: async (_: any, { _post }: any) => await post.insert(_post),
    updatePost: async (_: any, { id, _post }: any) => await post.update(id, _post),
    deletePost: async (_: any, { id }: any) => await post.delete(id)
  }
};

export {
  postResolvers,
};