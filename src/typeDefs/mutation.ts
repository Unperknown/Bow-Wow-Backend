import { gql } from 'apollo-server-koa';

const mutation = gql`
  type Mutation {
    addUser: User
    updateUser: User
    deleteUser: User
  }
`;

export {
  mutation,
};