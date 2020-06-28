import * as dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'GET,HEAD,POST,PUT,DELETE',
    credentials: true,
  },
});

export default handler;