//import { query, mutation, petType } from './typeDefs';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { makeExecutableSchema } from 'apollo-server-lambda';

const Schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export {
  Schema,
}