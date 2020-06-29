import { gql } from 'apollo-server-lambda';

const mutation = gql`
  type Mutation {
    createPet(input: PetInput): Pet
  }
`;

export {
  mutation,
};