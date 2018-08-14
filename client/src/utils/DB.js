import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/articles");
    },
    delete: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/articles", articleData);
    },
    update: function(articleData) {
      return axios.put("/api/articles/"+ articleData.id)
    },
    getById: function(id) {
      return axios.get("/api/articles/"+ id)
    }
  };