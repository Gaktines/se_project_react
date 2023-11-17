const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://api.wtwr.ix.tc'
  : 'http://localhost:3001';



export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const fetchItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
  return getItems;
};

export const loadItems = ({ name, imageUrl, weather }) => {
  const token = localStorage.getItem("jwt");
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => checkResponse(res));

  return postItems;
};

export const removeItems = (selectedCard) => {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard._id} `, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkResponse(res));
  return deleteItems;
};

export function editUserProfile({ name, avatar }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => checkResponse(res));
}

export const addCardLike = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkResponse(res));
};

export const removeCardLike = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkResponse(res));
};
