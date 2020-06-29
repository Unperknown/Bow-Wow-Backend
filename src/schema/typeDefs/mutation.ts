import { gql } from 'apollo-server-lambda';

const mutation = gql`
  extend type Mutation {
    createPet(input: PetInput): Pet
  }
`;

export {
  mutation,
}