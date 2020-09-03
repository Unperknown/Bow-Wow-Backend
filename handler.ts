import { dynamoDB, inputs } from './lib';
import { response } from './middlewares';

// TO-DO: APIGatewayEvent interface 재정의
const graphql = response(async (event: any) => {
  const functions: String = event.function;
  const data = JSON.parse(event.body);

  // TO-DO: Controller로 분리
  if (functions == 'createUser') {
    const input = inputs.createUserItemInput(data);

    await dynamoDB.put(input);

    return input.Item;
  }
});

export {
  graphql,
};