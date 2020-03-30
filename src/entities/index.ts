import { createConnection, getConnection, getRepository } from 'typeorm';
import { User } from './user';

createConnection();

const connection = getConnection();

const user = getRepository(User);

export {
  connection,
  user,
};