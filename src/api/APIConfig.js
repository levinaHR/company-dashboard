import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjYxNjU4NTU5LCJleHAiOjE2NjE2NjIxNTksIm5iZiI6MTY2MTY1ODU1OSwianRpIjoiem1kamRxcTV2Yk5tRkNocSIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Nr7JEN--ZMIRoPSX82zUx7TfeygHR6ZMgVs1ylN8AfU';
const APIConfig = axios.create({
  baseURL: 'https://mitramas-test.herokuapp.com',
  headers: {
    common: {
      Authorization: token,
    },
  },
});

export default APIConfig;
