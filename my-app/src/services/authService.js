const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const USERS_KEY = 'mock_users';

const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = async (userData) => {
  await delay(500); // simulate network delay
  const users = getUsers();
  const exists = users.find((u) => u.email === userData.email);
  if (exists) {
    throw { message: 'Email already registered' };
  }
  const newUser = { ...userData, id: Date.now(), token: 'mock-token' };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const loginUser = async (credentials) => {
  await delay(500); // simulate network delay
  const users = getUsers();
  const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);
  if (!user) {
    throw { message: 'Invalid email or password' };
  }
  return user;
};
