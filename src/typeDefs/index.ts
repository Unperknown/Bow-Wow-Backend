import { mutation } from './mutation';
import { query } from './query';
import { userType } from './type';

const typeDefs = [mutation, query, userType];

export {
  typeDefs,
};