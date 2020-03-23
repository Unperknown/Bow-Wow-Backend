import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as morgan from 'koa-morgan';

import * as mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-koa';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

import { errorHandling } from './middlewares';

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(response => {
  console.log('Successfully connected to MongoDB');
}).catch(e => {
  console.error(e);
});

const app = new Koa();
const router = new Router();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(errorHandling)
  .use(cors())
  .use(morgan('combined'))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

export default app;