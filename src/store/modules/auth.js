import Axios from 'axios'
import url from 'postcss-url'
import OAuthTokenService from '../../core/services/OAuthTokenService'

const _refresh_token = "refresh_token"
const _access_token = "access_token"

export default {
  state: {
    tokens: {},
    status: '',
    accessToken: localStorage.getItem(_access_token) ||  '',
    refreshToken: localStorage.getItem(_refresh_token) ||  '',
    user: {}
  },
  getters: {
    tokens: (state) => state.tokens,
    accessToken: state=>state.accessToken,
    refreshToken: state=>state.refreshToken,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    setTokens(state, tokens) {
      state.tokens = tokens;
    },
    auth_request(state) {
      state.status = 'loading'
    },
    setUser(state, email){
      state.user=email
    },
    setAccessToken(state, accessToken){
      state.accessToken = accessToken
    },
    setRefreshToken(state, refreshToken){
      state.refreshToken= refreshToken
    },
    auth_success(state) {
      state.status = 'success'
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.accessToken = ''
      state.refreshToken=''
      state.user=''
    },
  },
  actions: {
    async refreshToken({commit, state}) {
      return new Promise((resolve, reject) => {
        const isRefreshOk = true
        console.log("Caiu aqui Store")
        if (!state.refreshToken) {
          console.log("Sem refresh")
          return false
        }
        try {
          //consertar 
          const url = 'http://localhost:3000/auth/refresh'
          let userToken
          let refresh=state.refreshToken
           Axios.post(url, {refresh_token: refresh}).then(res=>{
            userToken = res.data
            localStorage.setItem(_access_token, res.data.access_token)
            localStorage.setItem(_refresh_token, res.data.refresh_token)
            // Mutation
            commit('setAccessToken',  res.data.access_token)
            commit('setRefreshToken',  res.data.refresh_token)
            commit('setTokens', userToken)
            // Return true/false for OK/NG
          
          })
          return !!userToken 
        } catch (err) {
          throw err
        }
      })
    },
    async login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        Axios.post("http://localhost:3000/auth/login", {
          "email": user.email,
          "password": user.password
        }, { headers: {'Content-Type': 'application/json'}})
        .then( response=> {
          const data = response.data
          // console.log(data.refresh_token)
          localStorage.setItem(_access_token, response.data.access_token)
          localStorage.setItem(_refresh_token, response.data.refresh_token)
          commit('setAccessToken',  data.access_token)
          commit('setRefreshToken',  data.refresh_token)
          commit('setTokens', response.data)
          commit('setUser', user.email)
          
          commit('auth_success')
        }).catch(err=>{
          console.log(err)
          commit('auth_error')
          localStorage.removeItem(_access_token)
          localStorage.removeItem(_refresh_token)
          reject(err)
        })
      }) 
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        console.log("deslogou")
        commit('logout')
        localStorage.removeItem(_access_token)
        localStorage.removeItem(_refresh_token)
        // verificar se esta retirando dos headers dps
        delete Axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
    
    //   actions: {
    //     login({ commit }, user) {
    //       return new Promise((resolve, reject) => {
    //         commit('auth_request')
    //         Axios.post("http://localhost:3000/auth/login", {
    //           "email":"jeferson@gmail.com",
    //           "password":"123456"
    //         }, {
    //           headers: {'Content-Type': 'application/json'}
    //         } ).then(function(response){
    //           const data = response.data
    //           const token = data['access_token']
    //           console.log(token)
    //           localStorage.setItem('access_token', response.data['access_token'])
    //           commit('auth_success', token, user)
    //         }).catch(err=>{
    //           console.log(err)
    //         })

    //         // Axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
    //         //   .then(resp => {
    //         //     const accessToken = resp.data.accessToken
    //         //     const user = resp.data.user
    //         //     localStorage.setItem('access_token', accessToken)
    //         //     // Add the following line:
    //         //     Axios.defaults.headers.common['Authorization'] = token
    //         //     commit('auth_success', token, user)
    //         //     resolve(resp)
    //         //   })
    //         //   .catch(err => {
    //         //     commit('auth_error')
    //         //     localStorage.removeItem('access_token')
    //         //     reject(err)
    //         //   })
    //       })
    //     },
    //     register({ commit }, user) {
    //       return new Promise((resolve, reject) => {
    //         commit('auth_request')
    //         axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
    //           .then(resp => {
    //             const token = resp.data.token
    //             const user = resp.data.user
    //             localStorage.setItem('access_token', token)
    //             // Add the following line:
    //             axios.defaults.headers.common['Authorization'] = token
    //             commit('auth_success', token, user)
    //             resolve(resp)
    //           })
    //           .catch(err => {
    //             commit('auth_error', err)
    //             localStorage.removeItem('access_token')
    //             reject(err)
    //           })
    //       })
    //     },
    //   },
}