import auth from '../../api/auth'
const state={
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations={
  setUser(state,payload){
    state.user = payload.user
  },
  setLogin(state,payload){
    state.isLogin = payload.isLogin
  }
}
const actions = {
  login({commit},{username, password}) {
    // 调用login的时候会返回一个promise 不return的话登录有页面没有效果
    return auth.login({username, password}).then(res=>{
      //把登录的信息通过mutations放入state
      commit('setUser',{user:res.data})
      commit('setLogin',{isLogin:true})
    })
  },

  // 用async来进行异步和上面的promise效果是一致的
  async register({commit},{username,password}) {
    let res=await auth.register({username,password})
    commit('setUser',{user:res.data})
    commit('setLogin',{isLogin:true})
    // 注册后返回data
    return res.data
  },
  async logout({commit}){
    await auth.logout()
    commit('setUser',{user:null})
    commit('setLogin',{isLogin:false})
  },
  async checkLogin({commit,state}){
    if(state.isLogin) return true
    let res = await auth.logInfo()
    commit('setLogin',{isLogin: res.isLogin})
    if(!res.isLogin){return false}
    commit('setUser',{user: res.data})
    return true;
  }
}
export default {
  state,
  getters,
  mutations,
  actions,
}
