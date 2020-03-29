import { gql } from 'apollo-server-koa';

const hospitalType = gql`
  type Hospital {
    id: String
    name: String
    location: String
  }

  input HospitalInput {
    id: String
    name: String
    location: String
  }
`;

export {
  hospitalType,
};