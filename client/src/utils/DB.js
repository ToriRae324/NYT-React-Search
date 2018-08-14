import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/article");
    },
    delete: function(id) {
      return axios.delete("/api/article/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/article", articleData);
    },
    update: function(articleData) {
      return axios.put("/api/article/"+ articleData.id)
    },
    getById: function(id) {
      return axios.get("/api/article/"+ id)
    }
  };