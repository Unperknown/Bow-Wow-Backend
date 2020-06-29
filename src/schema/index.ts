import { query, mutation, petType } from './typeDefs';
import { resolvers } from './resolvers';
import { makeExecutableSchema, gql } from 'apollo-server-lambda';

const RootSchema = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

const RootResolver = {
  Query: {
    root: () => '',
  },
};

export default makeExecutableSchema({
  typeDefs: [
    RootSchema,
    query,
    mutation,
    petType,
  ],
  resolvers: [
    RootResolver,
    resolvers,
  ],
});