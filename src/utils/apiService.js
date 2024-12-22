import axios from "axios";
import Config from "../config/config";

class ApiService {
    constructor(baseUrl){
        this.client = axios.create({
            baseURL: baseUrl,
            headers:{
                'Content-Type': 'application/json',
            }
        })

        this.client.interceptors.response.use(
            response => response,
            error => {
            // Xử lý lỗi
            console.error('API Error:', error.response || error.message);
            return Promise.reject(error);
            }
        );
    }

    // GET request
  get(endpoint, params = {}) {
    return this.client.get(endpoint, { params });
  }

  // POST request
  post(endpoint, data = {}) {
    return this.client.post(endpoint, data);
  }

  // PUT request
  put(endpoint, data = {}) {
    return this.client.put(endpoint, data);
  }

  // DELETE request
  delete(endpoint, params = {}) {
    return this.client.delete(endpoint, { params });
  }
}

export default new ApiService(Config.urlApi)