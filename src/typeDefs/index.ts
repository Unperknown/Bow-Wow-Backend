import { mutation } from './mutation';
import { query } from './query';
import { petType } from './type';

const typeDefs = [query, mutation, petType];

export {
  typeDefs,
};
