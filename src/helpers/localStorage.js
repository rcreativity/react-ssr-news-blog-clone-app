export const getItem = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
};

export const setItem = (key, value) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, value);
  }
};
