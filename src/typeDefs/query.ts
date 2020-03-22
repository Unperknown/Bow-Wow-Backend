import { gql } from 'apollo-server-koa';

const query = gql`
  type Query {
    tests: User
  }
`;

export {
  query,
};