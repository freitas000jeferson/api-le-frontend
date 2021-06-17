import { API_URL } from "../config";
import axios from 'axios'
import store from '../../store'
const isNull = v => v == null || v == undefined;
const noInternet = () => {
  Vue.$toast.dismiss(noInternetToastId)
  noInternetToastId = Vue.$toast("Não há conexão com o servidor!", {
    type: "error",
    timeout: 10000
  });
}


export class Service {

  constructor(baseURL) {
    this.request = axios.create({ 
      baseURL: API_URL + baseURL,
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer '+TOKEN
    }
    });
    this.request.interceptors.request.use( config => {  
        // Optional headers
        let ans= localStorage.getItem("access_token") 
        // console.log(store.state.auth)
        if (store.state.auth && store.state.auth.accessToken) {
          const token = store.state.auth.accessToken
          // console.log(token)
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      
      }, (error) => {
        return Promise.reject(error);
      })

    this.request.interceptors.response.use( response => {
        return response;
      }, async error => {
        const { config, response } = error;
        console.log("Caiu aqui")
        
      let isAlreadyFetchingAccessToken = false;
      const originalRequest = config;
      let isRefreshOk = false;
      if (response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          isRefreshOk = await store.dispatch('refreshToken');
          isAlreadyFetchingAccessToken = false;
        }
        console.log(isRefreshOk)
        if (isRefreshOk) {
          const retryOriginalRequest = new Promise((resolve) => {
              resolve(this.request(originalRequest));
          });
          return retryOriginalRequest; // Return the resposne from original request with new token
        } else {
          return Promise.reject(error); // Return original response
        }
      } else { // Non 498 response
        return Promise.reject(error);
      }
   

    });
  }

  async findAll(params = {}, config = {}) {
    return this.request
      .get("", {
        params,
        ...config
      })
      .then(r => r.data);
  }

  async findById(id, params = {}, config = {}) {
    if (isNull(id)) {
      throw new TypeError(
        `Nenhum ID foi passado para ${this.constructor.name}#findById().`
      );
    }

    return this.request
      .get(`${id}`, {
        params,
        ...config
      }).then(r => r.data);
  }

  async update(data, params = {}, config = {}) {
    if (isNull(data)) {
      throw new TypeError(
        `Nenhum dado foi passado para ${this.constructor.name}#update()`
      );
    }
    
    if (isNull(data.id)) {
      throw new TypeError(
        `O campo data.id não foi passado para ${this.constructor.name}#update()`
      );
    }

    return this.request
      .put(data.id, data, {
        params,
        ...config
      }).then(r => r.data);
  }

  async create(data, params = {}, config = {}) {
    if (isNull(data)) {
      throw new TypeError(
        `Nenhum dado foi enviado para ${this.constructor.name}#create()`
      )
    }

    delete data.id
    return this.request
      .post("", data, {
        params,
        ...config
      })
      .then(r => r.data);
  }
  save(data, params = {}, config = {}) {
    if (isNotSet(data)) {
      throw new TypeError(
        `Nenhum dado foi passado para ${this.constructor.name}#save()`
      );
    }
    return isNotSet(data.id)
      ? this.create(data, params, config)
      : this.update(data, params, config);
  }
  async delete(id, params = {}, config = {}) {
    if (isNotSet(id)) {
      throw new TypeError(
        `ID não foi passado para ${this.constructor.name}#delete()`
      );
    }
    return this.request
      .delete(`${id}`, {
        params,
        ...config
      })
      .then(r => r.data);
  }

  async savePartial(data, route = "", params = {}, config = {}) {
    return this.request({
      method: data.id ? "PATCH" : "POST",
      url: data.id ? [data.id, route].join("/") : route,
      data,
      params,
      ...config
    }).then(r => r.data);
  }

  async getByIdPartial(id, route = "", params = {}, config = {}) {
    return this.request({
      method: "GET",
      url: [id, route].join("/"),
      params,
      ...config
    }).then(r => r.data);
  }
}