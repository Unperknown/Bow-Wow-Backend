import { gql } from 'apollo-server-koa';

const userType = gql`
  type User {
    id: String
    name: String
    roles: String
    profile: String
  }

  input UserInput {
    id: String
    password: String
    name: String
    roles: String
    profile: String
  }
`;

export {
  userType,
};