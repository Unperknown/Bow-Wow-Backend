import {
  createUser,
  createPet,
  closeUser,
  deletePet,
  createPost,
  createAlarm,
  deleteAlarm,
  deletePost,
} from './mutations';

const mappedResolverWithRequest = async (payload: any) => {
  let result;

  switch (payload.field) {
  case 'createUser':
    result = await createUser(payload);
    break;
  case 'createPet':
    result = await createPet(payload);
    break;
  case 'createPost':
    result = await createPost(payload);
    break;
  case 'createAlarm':
    result = await createAlarm(payload);
    break;
  case 'closeUser':
    result = await closeUser(payload);
    break;
  case 'deletePet':
    result = await deletePet(payload);
    break;
  case 'deletePost':
    result = await deletePost(payload);
    break;
  case 'deleteAlarm':
    result = await deleteAlarm(payload);
    break;
  }

  return result;
};

export { mappedResolverWithRequest };
