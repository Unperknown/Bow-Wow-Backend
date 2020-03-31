import { createConnection, getConnection, getRepository } from 'typeorm';
import { User } from './user';
import { Pet } from './pet';
import { Post } from './post';
import { Hospital } from './hospital';

createConnection();

const connection = getConnection();

const user = getRepository(User);
const pet = getRepository(Pet);
const post = getRepository(Post);
const hospital = getRepository(Hospital);

export {
  connection,
  user,
  pet,
  post,
  hospital,
};