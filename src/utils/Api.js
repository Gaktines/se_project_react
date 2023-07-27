const baseUrl = "https://my-json-server.typicode.com/gaktines/se_project_react";

export const getItems = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return getItems;
};

export const postItems = ({name, link, weather}) => {
  const postItems = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, link, weather})
}).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return postItems;
};

export const deleteItems = () => {
  const deleteItems = fetch(`${baseUrl}/items/:id `, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return deleteItems;
};
