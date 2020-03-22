import * as Router from 'koa-router';
import { getUser } from 'controllers';

const user = new Router();

user.use('/user', getUser);

export default api;