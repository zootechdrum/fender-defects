import axios from "axios";

export default {
  // Gets all books
  getDefects: function () {
    return axios.get("/api/defects");
  },
};
