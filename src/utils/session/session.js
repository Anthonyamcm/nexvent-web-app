import { v4 } from 'uuid';

export const getSession = () => {
  try {
    const currentSession = JSON.parse(localStorage.getItem('session'));
    if (!currentSession) {
      throw Error();
    }
    return currentSession;
  } catch (err) {
    return null;
  }
};

export const getSessionId = () => {
  try {
    const currentSessionId = localStorage.getItem('session_id');
    if (!currentSessionId) {
      throw Error();
    }
    return currentSessionId;
  } catch (err) {
    const newSessionId = v4();
    console.log('generate new session');
    localStorage.setItem('session_id', newSessionId);
    return newSessionId;
  }
};