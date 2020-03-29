import { gql } from 'apollo-server-koa';

const query = gql`
  type Query {
    user(id: String): User
    users: [User]

    pets(userID: String): [Pet]

    post: Post
    posts: [Post]

    hospital(id: String): Hospital
    hospitals: [Hospital]
  }
`;

export {
  query,
};