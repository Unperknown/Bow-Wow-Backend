import { userResolvers } from './userResolvers';
import { petResolvers } from './petResolvers';
import { postResolvers } from './postResolvers';
import { hospitalResolvers } from './hospitalResolvers';

const resolvers = [userResolvers, petResolvers, postResolvers, hospitalResolvers];

export {
  resolvers,
};