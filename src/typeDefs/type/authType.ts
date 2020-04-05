import { gql } from 'apollo-server-koa';

const authType = gql`
  type AuthPayload {
    token: String
    user: User
  }
`;

export { authType };