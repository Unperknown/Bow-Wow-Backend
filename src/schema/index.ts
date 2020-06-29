import { query, mutation, petType } from './typeDefs';
import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'apollo-server-lambda';

export default makeExecutableSchema({
  typeDefs: [
    query,
    mutation,
    petType,
  ],
  resolvers: [
    resolvers,
  ],
});