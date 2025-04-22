const BASE_URL = "http://localhost:4000/tasks";

export const getTasks = async (search = '') => {
  const res = await fetch(`${BASE_URL}?search=${search}`);
  return res.json();
};

export const deleteTask = async (id) => {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export const addTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, updatedTask) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  return res.json();
};
