import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server: ApolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  mockEntireSchema: true,
});

const handler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'GET,HEAD,POST,PUT,DELETE',
    credentials: true,
  },
});

export {
  handler,
};
