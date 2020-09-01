import { gql } from 'apollo-server-lambda';

const query = gql`
  type Query {
    me: User
    myPets: [Pet]
    hospitals(coordinate: Coordinate!): [Hospital]
    diagnosis(petId: ID!): [Diagnosis]
  }
`;

export { query };
