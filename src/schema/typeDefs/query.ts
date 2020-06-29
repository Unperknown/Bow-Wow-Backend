import { gql } from 'apollo-server-lambda';

const query = gql`
  type Query {
    pet(pid: String): Pet
    pets: [Pet]
  }
`;

export {
  query,
};