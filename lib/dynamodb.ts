import { DynamoDB } from 'aws-sdk';

const dynamoDB = new DynamoDB.DocumentClient();

export default {
  get: (input: any) => dynamoDB.get(input).promise,
  batchGet: (input: any) => dynamoDB.batchGet(input).promise,
  put: (input: any) => dynamoDB.put(input).promise,
  batchWrite: (input: any) => dynamoDB.batchWrite(input).promise,
  query: (input: any) => dynamoDB.query(input).promise,
  update: (input: any) => dynamoDB.update(input).promise,
  delete: (input: any) => dynamoDB.delete(input).promise,
};