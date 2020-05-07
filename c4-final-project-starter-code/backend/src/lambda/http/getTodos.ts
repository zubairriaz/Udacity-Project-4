import 'source-map-support/register'
import { getTodos } from '../../busineesLogic/todos';

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
 const todos = await getTodos(event);

 return {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify({
    items: await getTodos(event)
  })
};
}
