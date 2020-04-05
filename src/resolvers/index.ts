import { userResolvers } from './userResolvers';
import { petResolvers } from './petResolvers';
import { postResolvers } from './postResolvers';
import { hospitalResolvers } from './hospitalResolvers';
import { authResolvers } from './authResolvers';

const resolvers = [userResolvers, petResolvers, postResolvers, hospitalResolvers, authResolvers];

export {
  resolvers,
};