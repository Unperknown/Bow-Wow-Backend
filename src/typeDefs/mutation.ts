import { gql } from 'apollo-server-koa';

const mutation = gql`
  type Mutation {
    addUser(user: UserInput): User
    updateUser(id: String, user: UserInput): User
    deleteUser(id: String): User

    addPet(pet: PetInput): Pet
    updatePet(id: String, pet: PetInput): Pet
    deletePet(id: String): Pet

    addPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): Post

    addHospital(hospital: HospitalInput): Hospital
    updateHospital(id: String, hospital: HospitalInput): Hospital
    deleteHospital(id: String): Hospital
  }
`;

export {
  mutation,
};