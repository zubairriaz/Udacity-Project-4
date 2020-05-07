import 'source-map-support/register'
import {deleteTodo} from "../../busineesLogic/todos";

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  
  if (!(await deleteTodo(event))) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: 'Item does not exist'
      })
    };
  }

  // TODO: Remove a TODO item by id
  return {
    statusCode: 202,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({})
  };
  }
}
