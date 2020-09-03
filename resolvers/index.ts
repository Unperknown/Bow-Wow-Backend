import { createUser, createPet } from './mutations';

const mappedResolverWithRequest = async (payload: any) => {
  let result;
  
  switch (payload.field) {
  case 'createUser':
    result = await createUser(payload);
    break;
  case 'createPet':
    result = await createPet(payload);
    break;
  }

  return result;
};

export { 
  mappedResolverWithRequest,
};
