import { gql } from 'apollo-server-lambda';

const mutation = gql`
  type Mutation {
    createPet(name: String!, age: Int, weight: Float, profile: String): Pet
    createPost(description: String, pictures: [String]): Post
    createAlarm(petId: ID!, time: DateTime): Alarm
    createDiagnosis(
      petId: ID!
      startTime: DateTime!
      endTime: DateTime!
    ): Diagnosis
  }
`;

export { mutation };
