export const getSupportedNavigations = () => {
    const NAVIGATIONS = document.getElementById('NAVIGATIONS').content;
    if (NAVIGATIONS) {
      const arr = NAVIGATIONS.split(',').map((nav) => nav.trim());
      return arr;
    }
    return [];
  };