export const getToken = () => localStorage.getItem('token');

export const isFirstAccess = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user.first_access) {
    return true;
  }
  return false;
};

export const userPersonType = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user != null && user.person === 'LEGAL';
};

const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  return !!token;
};

export default isAuthenticated;
