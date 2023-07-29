const baseUrl = "https://my-json-server.typicode.com/gaktines/se_project_react";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export const getItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
  return getItems;
};

export const postItems = ({ name, link, weather }) => {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, link, weather }),
  }).then(checkResponse);
    

  return postItems;
};

export const deleteItems = (selectedCard) => {
  const deleteItems = fetch(`${baseUrl}/items/${selectedCard.id} `, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
  return deleteItems;
};
