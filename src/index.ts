import { ApolloServer } from 'apollo-server-lambda';
import { Schema } from './schema';

const server = new ApolloServer({
  schema: Schema,
  mockEntireSchema: true,
  playground: {
    endpoint: '/dev/graphql'
  },
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
