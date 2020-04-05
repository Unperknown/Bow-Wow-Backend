import { gql } from 'apollo-server-koa';

const petType = gql`
  type Pet {
    name: String
    profile: String
    userID: String
  }

  input PetInput {
    name: String
    profile: String
    userID: String
  }
`;

export {
  petType,
};