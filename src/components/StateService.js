import axios from 'axios'
const STATE_REST_API_URL = 'http://localhost:8081/stateinfo/getAll';

class StateService {
    getStateInfoFromDataBase(){
        axios.get(STATE_REST_API_URL);
    }    
}
export default new StateService();