const getDeviceOS = () => {
    if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) return 'Windows 10';
    if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) return 'Windows 8';
    if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) return 'Windows 7';
    if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) return 'Windows Vista';
    if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) return 'Windows XP';
    if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) return 'Windows 2000';
    if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Mac/iOS';
    if (window.navigator.userAgent.indexOf('X11') !== -1) return 'UNIX';
    if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux';
    return 'UNKNOWN';
  };

const clearSessionStorage = () => {
    sessionStorage.clear();
    console.info('⚠️ sessionStorage cleared');
    console.info('⚠️ Redux state related to register flow has been deleted');
  };
const clearLocalStorage = () => {
    localStorage.clear();
    console.info('⚠️ localStorage cleared');
    console.info('⚠️ session_id has been remove from persistant storage');
    console.info('⚠️ Register flow will not able to retrieve data from redis cache now');
  };
const clearAllStorage = () => {
    console.group('⚠️ Clear All Storage...');
    clearSessionStorage();
    clearLocalStorage();
    console.groupEnd();
  };

const storeLastUrl = () => {
    const lastUrl = window.location.pathname;
    localStorage.setItem('lastUrl', JSON.stringify(lastUrl));
  };
const getLastUrl = () => {
    if (localStorage.lastUrl) {
      return JSON.parse(localStorage.getItem('lastUrl'));
    }
    return '';
  };

 const clearLastUrl = () => {
    localStorage.removeItem('lastUrl');
  };

  export {
  getDeviceOS,
  clearSessionStorage,
  clearLocalStorage,
  clearAllStorage,
  storeLastUrl,
  getLastUrl,
  clearLastUrl,
  }