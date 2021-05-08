import http from "../http-common";

class WillitendService {
  

  createNewsletter(newsletter) {
    return http.post("/newsletter/create", newsletter); // what does data reference?
  }

}

export default new WillitendService();

