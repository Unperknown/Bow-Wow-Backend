import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import * as cors from '@koa/cors';

import * as mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-koa';

mongoose.connect(process.env.MONGODB_URI || '', {
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

});

server.applyMiddleware({ app });

app.use(cors())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

app.on('error', err => {
  console.error(err);
})