import { DynamoDB } from 'aws-sdk';
import { BatchGetItemInput, BatchWriteItemInput, DeleteItemInput, GetItemInput, PutItemInput, QueryInput, UpdateItemInput } from 'aws-sdk/clients/dynamodb';

const dynamoDB = new DynamoDB.DocumentClient();

export default {
  get: (input: GetItemInput) => dynamoDB.get(input).promise(),
  batchGet: (input: BatchGetItemInput) => dynamoDB.batchGet(input).promise(),
  put: (input: PutItemInput) => dynamoDB.put(input).promise(),
  batchWrite: (input: BatchWriteItemInput) => dynamoDB.batchWrite(input).promise(),
  query: (input: QueryInput) => dynamoDB.query(input).promise(),
  update: (input: UpdateItemInput) => dynamoDB.update(input).promise(),
  delete: (input: DeleteItemInput) => dynamoDB.delete(input).promise(),
};