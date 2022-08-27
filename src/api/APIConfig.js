import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjYxNjEzOTMwLCJleHAiOjE2NjE2MTc1MzAsIm5iZiI6MTY2MTYxMzkzMCwianRpIjoic1NESHRoODFpaG5DM0FpUiIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.41TNMhFpAFb7vdDllJROn2rVEOtR04W4m-VdLfMZpPY';
const APIConfig = axios.create({
  baseURL: 'https://mitramas-test.herokuapp.com',
  headers: {
    common: {
      Authorization: token,
    },
  },
});

export default APIConfig;
