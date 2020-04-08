import * as jwt from 'jsonwebtoken';
import { Context, Next } from 'koa';

const APP_SECRET = process.env.APP_SECRET || 'Bow-Wow';

export const getUserID = async (ctx: Context, next: Next) => {
  const token = ctx.request.headers.authorization;

  ctx.assert(token, 401, 'Error');

  const userID = jwt.verify(token, APP_SECRET);

  return userID;
};