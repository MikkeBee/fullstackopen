import axios from "axios";

const baseURL = "http://localhost:3001/persons";
const getInfo = () => {
  return axios.get(baseURL);
};

const createPerson = (peep) => {
  return axios.post(baseURL, peep);
};

const updatePerson = (id, peep) => {
  return axios.put(`${baseURL}/${id}`, peep);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

export default {
  getInfo,
  createPerson,
  updatePerson,
  deletePerson,
};
