import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjYxNjE4MTMwLCJleHAiOjE2NjE2MjE3MzAsIm5iZiI6MTY2MTYxODEzMCwianRpIjoiSkxlTWJvdzh1alNqNVVpZyIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.UNqJpB52byd4pgkWephctVBqsmfk1y1dXYhg72-wSkw';
const APIConfig = axios.create({
  baseURL: 'https://mitramas-test.herokuapp.com',
  headers: {
    common: {
      Authorization: token,
    },
  },
});

export default APIConfig;
