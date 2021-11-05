import axios from 'axios';
import 'moment-timezone';
import { getSession, getSessionId} from './session/session';
import { getDeviceOS } from './helper';



const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: false,
  // transformRequest: [(data) => {
  //   if (data === undefined) {
  //     return data;
  //   }
  //   const cipher = EncryptHelper.prepareEncrypt(data);
  //   return JSON.stringify(cipher);
  // }],
});


const instanceMultiFormData = axios.create({
  baseURL: 'http://localhost:4000',
  validateStatus: false,
});

// instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.platform = 'WEB';
instance.defaults.headers.common.os = getDeviceOS();

instanceMultiFormData.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instanceMultiFormData.defaults.headers.common.platform = 'WEB';
instance.defaults.headers.common.os = getDeviceOS();

instance.interceptors.response.use(
  (response) => {
    if (response && response.status === 401) {
      const userLoggedin = getSession();
      if (userLoggedin) {
        window.location.href = '/logout';
      }
    }
    if (response && response.status === 500) {
      return {
        ...response.data,
        code: response.status,
      };
    }
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    redirectOnUnauthorize(error);
    Promise.reject(error);
  },
);

instanceMultiFormData.interceptors.response.use(
  (response) => {
    if (response && response.status === 401) {
      const userLoggedin = getSession();
      if (userLoggedin) {
        window.location.href = '/logout';
      }
    }
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    redirectOnUnauthorize(error);
    Promise.reject(error);
  },
);

const redirectOnUnauthorize = (error) => {
  const userLoggedin = getSession();
  if (error.response && error.response.status === 401 && userLoggedin) {
    window.location.href = '/logout';
  }
};

const attachAuthToken = () => {
  const session = getSession();
  const sessionId = getSessionId();
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.headers.common['Session-Id'] = sessionId;
  instance.defaults.headers.common.platform = 'WEB';
  instance.defaults.headers.common.os = getDeviceOS();
  instance.defaults.headers.common.Authorization = `${session && `BEARER ${session.token}`}`;
  instanceMultiFormData.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  instanceMultiFormData.defaults.headers.common['Session-Id'] = sessionId;
  instanceMultiFormData.defaults.headers.common.platform = 'WEB';
  instanceMultiFormData.defaults.headers.common.os = getDeviceOS();
  instanceMultiFormData.defaults.headers.common.Authorization = `${session && `BEARER ${session.token}`}`;
};

const attachSessionId = () => {
  const sessionId = getSessionId();
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.headers.common['Session-Id'] = sessionId;
  instance.defaults.headers.common.platform = 'WEB';
  instance.defaults.headers.common.os = getDeviceOS();
  instanceMultiFormData.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  instanceMultiFormData.defaults.headers.common['Session-Id'] = sessionId;
  instanceMultiFormData.defaults.headers.common.platform = 'WEB';
  instanceMultiFormData.defaults.headers.common.os = getDeviceOS();
};


const AUTHENTICATION = () => ({
  login: (objectData) => {
    attachSessionId();
    return instance.post('/users/authenticate', objectData);
  },
  logout: (objectData) => {
    attachAuthToken();
    return instance.post('/api/users/logout', objectData);
  },
  forgotPassword: (objectData) => {
    attachSessionId();
    return instance.post('/api/users/forget/password', objectData);
  },
  resetPassword: (objectData) => {
    attachSessionId();
    return instance.post('/api/users/reset/password', objectData);
  }
});

const USER = () => ({
  get_userinfo: () => instance.get('/api/users/me'),
  update_userinfo: (objectData) => instanceMultiFormData.put('/api/users/me', objectData),
  register: (objectData) => instance.post('users/register', objectData)
});

export default {
  AUTHENTICATION,
  USER
};