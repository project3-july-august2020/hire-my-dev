import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  // ? (baseURL = 'https://sheltered-dawn-07708.herokuapp.com')
  ? (baseURL = 'window.location.origin')
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  fileUpload: async (data) => {
    return await service.post('/fileupload', data)
  },
  userdata: async (userdata) => {
    return await service.post('/userdata', userdata)
  },
  project: async (data) => {
    return await service.post('/project', data)
  },
  getuserdata: async () => {
    return await service.get('/getuserdata')
  },
  favoriteJob: async (data) => {
    return await service.post('/favorite_job', data)
  },
  getFavoriteJobs: async () => {
    return await service.get('/getfavoritejobs')
  },
  deleteJob: async (data) => {
    return await service.get(`/deletejob/${data} `)
  },
};

export default actions;
