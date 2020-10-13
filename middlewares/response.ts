import { APIGatewayEvent, Context } from 'aws-lambda';

export default (lambda: any) => {
  return async (event: APIGatewayEvent, context: Context) => {
    let body: any, statusCode: number;

    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (err) {
      body = { error: err.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  };
};
