import { Context, Next } from 'koa';

export const errorHandling = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    ctx.status = err.status;

    ctx.body = {
      error: {
        message: err.message
      }
    };
  }
};