import { mutation } from './mutation';
import { query } from './query';
import { types } from './type';

const typeDefs = [query, mutation, types];

export {
  typeDefs,
};
