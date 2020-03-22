import { Context, Next } from 'koa';

export async function getUser(ctx: Context, next: Next) {
  ctx.body = 'GET /api/user';
}