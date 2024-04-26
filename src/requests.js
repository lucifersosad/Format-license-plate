const API_DOMAINS = "http://localhost:3002/";

export const get = async (path) => {
  const response = await fetch(API_DOMAINS + path);
  const result = await response.json(); 
  return result;
}

export const post = async (path, options) => {
  const response = await fetch(API_DOMAINS + path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options) 
    });
    const result = await response.json();
    return result;
}

export const del = async (path) => {
  const response = await fetch(API_DOMAINS + path, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAINS + path, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options) 
    });
    const result = await response.json();
    return result;
}