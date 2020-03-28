import { gql } from 'apollo-server-koa';

const query = gql`
  type Query {
    user: User
    users: [User]
  }
`;

export {
  query,
};