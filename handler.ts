import { response } from './middlewares';
import { mappedResolverWithRequest } from './resolvers';

// TO-DO: APIGatewayEvent interface 재정의
const main = response(async (event: any) => {
  const parsed = JSON.parse(JSON.stringify(event));
  const payload = parsed.payload;

  const result = await mappedResolverWithRequest(payload);

  return result;
});

export {
  main,
};