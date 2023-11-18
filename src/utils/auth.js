import { checkResponse } from "./Api";

export const baseUrl = process.env.NODE_ENV === 'production' 
? 'https://api.wtwr.ix.tc'
: 'http://localhost:3001';

// signup
//export const signup = ({ name, avatar, email, password }) => {
// fetch(`${baseUrl}/signup`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name, avatar, email, password }),
// });
//};

// signin
export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};

// register
export const register = (email, password, name, avatar, token) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }, token),
  }).then((response) => {
    return checkResponse(response).then((data) => {
      console.log(data);
      console.log(response);
      if (response.status === 201) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    });
  });
};

// check token
export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
