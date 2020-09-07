import { DeleteItemInput, PutItemInput, UpdateItemInput } from 'aws-sdk/clients/dynamodb';
import { v4 as uuidv4 } from 'uuid';

const createUserItemInput = (payload: any) => {
  return <PutItemInput>{
    TableName: process.env.USERS_TABLE ?? 'User',
    Item: {
      uid: uuidv4(),
      name: payload.arguments.name,
      nickname: payload.arguments.nickname,
      id: payload.arguments.id,
      password: payload.arguments.password, // TO-DO: 비밀번호 암호화
      profile: payload.arguments.profile, // TO-DO: AWS S3 Bucket 연동
      location: {
        // TO-DO: Geography 연동
        lat: payload.arguments.location.lat,
        lng: payload.arguments.location.lng,
      },
    },
  };
};

const createPetItemInput = (payload: any) => {
  return <UpdateItemInput>{
    TableName: process.env.USERS_TABLE ?? 'User',
    Key: {
      uid: payload.identity.sub,
    },
    UpdateExpression: 'SET #pet = list_append(#pet, :pet)',
    ExpressionAttributeNames: {
      '#pet': 'pet',
    },
    ExpressionAttributeValues: {
      ':pet': [{
        id: uuidv4(),
        name: payload.arguments.name,
        age: payload.arguments.age,
        weight: payload.arguments.weight,
        profile: payload.arguments.profile,
      }]
    },
    ReturnValues: 'ALL_NEW',
  };
};

const closeUserItemInput = (payload: any) => {
  return <DeleteItemInput>{
    TableName: process.env.USERS_TABLE ?? 'User',
    Key: {
      uid: payload.identity.sub
    }
  };
};

const deletePetItemInput = (payload: any) => {
  return <UpdateItemInput>{
    TableName: process.env.USERS_TABLE ?? 'User',
    Key: {
      uid: payload.identity.sub,
    },
    UpdateExpression: 'REMOVE pet[0]',
    ReturnValues: 'ALL_NEW',
  };
};

export default {
  createUserItemInput,
  createPetItemInput,
  closeUserItemInput,
  deletePetItemInput,
};
