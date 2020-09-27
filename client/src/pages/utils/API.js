import axios from "axios";


export default {
  // Gets all defects
  getDefects: function () {
    return axios.get("/api/defects");
  },

};
