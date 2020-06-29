import { gql } from 'apollo-server-lambda';

const query = gql`
  extend type Query {
    pet(pid: String): Pet
    pets: [Pet]
  }
`;

export {
  query,
}