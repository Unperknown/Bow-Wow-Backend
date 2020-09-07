import { createUser, createPet, closeUser, deletePet } from './mutations';

const mappedResolverWithRequest = async (payload: any) => {
  let result;
  
  switch (payload.field) {
  case 'createUser':
    result = await createUser(payload);
    break;
  case 'createPet':
    result = await createPet(payload);
    break;
  case 'closeUser':
    result = await closeUser(payload);
    break;
  case 'deletePet':
    result = await deletePet(payload);
    break;
  }

  return result;
};

export { 
  mappedResolverWithRequest,
};
