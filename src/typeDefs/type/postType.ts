import { gql } from 'apollo-server-koa';

const postType = gql`
  type Post {
    title: String
    pictures: [String]
    content: String
    liked: [String]
  }

  input PostInput {
    title: String
    pictures: [String]
    content: String
  }
`;

export {
  postType,
};