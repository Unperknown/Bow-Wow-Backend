import { gql } from 'apollo-server-koa';

const mutation = gql`
  type Mutation {
    addUser(user: UserInput): User
    updateUser(user: UserInput): User
    deleteUser(id: String): User

    addPet(pet: PetInput): Pet
    updatePet(pet: PetInput): Pet
    deletePet(id: String): Pet

    addPost(post: PostInput): Post
    updatePost(post: PostInput): Post
    deletePost(id: String): Post

    addHospital(hospital: HospitalInput): Hospital
    updateHospital(hospital: HospitalInput): Hospital
    deleteHospital(id: String): Hospital
  }
`;

export {
  mutation,
};