import http from "./http-common.js";

class WillitendService {

  getAllExp() {
    return http.get("/exp/getAll"); 
  }

  getAllStateInfo() {
    return http.get("/stateinfo/getAll"); 
  }

  getUserInfo(username) {
    return http.get(`/user/${username}`); 
  }

  createNewsletter(newsletter) {
    return http.post("/newsletter/create", newsletter); 
  }

  createExp(experience) {
    return http.post("/exp/create", experience); 
  }

  createStateinfo(stateinfo) {
    return http.post("/stateinfo/create", stateinfo);
  }

  createUser(user) {
    return http.post("/user/create", user); 
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  updateStateinfo(name, stateinfo) {
    return http.put(`/stateinfo/updaye/${name}`, stateinfo);
  }
}
export default new WillitendService();