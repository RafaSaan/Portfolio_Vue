import axios from "axios";

const controlApi = axios.create({
  baseURL: "https://control-reptiles-default-rtdb.firebaseio.com",
});

export default controlApi;
