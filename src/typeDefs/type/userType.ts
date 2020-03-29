import { gql } from 'apollo-server-koa';

const userType = gql`
  type User {
    id: String
    name: String
    profile: String
  }

  input UserInput {
    id: String
    name: String
    password: String
    profile: String
  }
`;

export {
  userType,
};