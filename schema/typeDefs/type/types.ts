import { gql } from 'apollo-server-lambda';

const types = gql`
  type Coordinate {
    lat: Float!
    lng: Float!
  }

  type User {
    uid: ID!
    name: String!
    nickname: String
    id: String!
    password: String!
    profile: String
    location: Coordinate
  }

  type Pet {
    id: ID!
    owner: User!
    name: String
    age: Int
    weight: Float
    profile: String
  }

  type Alarm {
    id: ID!
    pet: Pet!
    time: DateTime
  }

  type Post {
    id: ID!
    user: User!
    pictures: [String]
    description: String!
    likes: [User]
  }

  type Hospital {
    id: ID!
    name: String
    description: String
    start_time: DateTime
    end_time: DateTime
    location: Coordinate
  }

  type Diagnosis {
    id: ID!
    pet: Pet!
    start_time: DateTime!
    end_time: DateTime!
  }
`;

export { types };
