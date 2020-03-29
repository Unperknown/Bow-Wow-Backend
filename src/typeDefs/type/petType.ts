import { gql } from 'apollo-server-koa';

const petType = gql`
  type Pet {
    name: String
    profile: String
  }

  input PetInput {
    name: String
    profile: String
  }
`;

export {
  petType,
};