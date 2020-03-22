import { gql } from 'apollo-server-koa';

const userType = gql`
  type User {
    id: String
  }
`;

export {
  userType,
};