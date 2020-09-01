import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { schema } from './schema';

const server = new ApolloServer({
  schema: schema,
  mockEntireSchema: true,
  playground: {
    endpoint: '/graphql'
  },
});

const handler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'GET,HEAD,POST,PUT,DELETE',
    credentials: true,
  },
});

const graphql = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  return handler(event, context, callback);
};

export {
  graphql,
};
