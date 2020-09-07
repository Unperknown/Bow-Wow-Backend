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

const createPost = async (payload: any) => {
  const input = inputs.createPostItemInput(payload);
  
  await dynamoDB.put(input);

  return input.Item;
};

const createAlarm = async (payload: any) => {
  const input = inputs.createAlarmItemInput(payload);

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

const deletePost = async (payload: any) => {
  const input = inputs.deletePostItemInput(payload);

  const result = await dynamoDB.delete(input);

  return result.$response.data;
};

const deleteAlarm = async (payload: any) => {
  const input = inputs.deleteAlarmItemInput(payload);

  const result = await dynamoDB.update(input);

  return result.$response.data;
};

export {
  createUser,
  createPet,
  createPost,
  createAlarm,
  closeUser,
  deletePet,
  deletePost,
  deleteAlarm,
};