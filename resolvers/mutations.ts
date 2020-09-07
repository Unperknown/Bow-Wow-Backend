import { dynamoDB, inputs } from '../lib';

const createUser = async (payload: any) => {
  const input = inputs.createUserItemInput(payload);

  await dynamoDB.put(input);
  
  return input.Item;
};

const createPet = async (payload: any) => {
  const input = inputs.createPetItemInput(payload);

  const result = await dynamoDB.update(input);
  
  return result.$response.data;
};

const closeUser = async (payload: any) => {
  const input = inputs.closeUserItemInput(payload);

  const result = await dynamoDB.delete(input);

  return result.$response.data;
};

const deletePet = async (payload: any) => {
  const input = inputs.deletePetItemInput(payload);

  const result = await dynamoDB.update(input);

  return result.$response.data;
};

export {
  createUser,
  createPet,
  closeUser,
  deletePet,
};