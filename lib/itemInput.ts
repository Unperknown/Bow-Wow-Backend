import { v4 as uuidv4 } from 'uuid';

const createUserItemInput = (data: any) => {
  return {
    TableName: 'bow-wow',
    Item: {
      id: uuidv4(),
      name: data.name,
      nickname: data.nickname,
      password: data.password, // TO-DO: 비밀번호 암호화
      profile: data.profile, // TO-DO: AWS S3 Bucket 연동
      location: data.location, // TO-DO: Geography 기능 추가
    },
  };
};

export default {
  createUserItemInput,
};
