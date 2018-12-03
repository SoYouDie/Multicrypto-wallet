export default {
  namespaced: true,
  
  state: {
    login: null,
    password: null,
    mnemonic: null
  },
  
  getters: {
    login: state => { return state.login },
    password: state => { return state.password },
    mnemonic: state => { return state.mnemonic }
  },
  
  actions: {},
  
  mutations: {
    
  }
}
  