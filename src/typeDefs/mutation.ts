import { gql } from 'apollo-server-koa';

const mutation = gql`
  type Mutation {
    test: User
  }
`;

export {
  mutation,
};