import { gql } from 'apollo-server-lambda';

const petType = gql`
  type Pet {
    pid: String!
    name: String!
  }

  input PetInput {
    pid: String!
    name: String!
  }
`;

export { petType };
