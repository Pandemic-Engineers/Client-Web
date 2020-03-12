import request from "../utils/request";

export default {
  login: (email, password) => request.post(`/users/login`, { email, password }),
  register: (firstname, lastname, email, password) =>
    request.post(`/users`, { firstname, lastname, email, password })
};
