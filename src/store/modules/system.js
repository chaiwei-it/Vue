import * as types from '../mutation-types'
import lib from '@/assets/js/lib.js'
const {gets, sets} = lib

// 初始化参数
const state = {
  user_menu: gets('USERMENU') || [],         // --- 用户菜单
  login_info: gets('LOGININFO') || {},         // --- 用户信息
  user_position: []                          // --- 用户当前位置
}
const mutations = {
  [types.SYSTEM_SETUSERMENU] (state, menu) {
    state.user_menu = menu
    sets('USERMENU', state.user_menu)
  },
  [types.SYSTEM_SETLOGININFO] (state, info) {
    state.login_info = info
    sets('LOGININFO', state.login_info)
  },
  [types.SYSTEM_SETPOSITION] (state, arr) {
    state.user_position = arr
  }
}

const actions = {
  [types.SYSTEM_SETUSERMENU] ({commit}, menu) {
    commit(types.SYSTEM_SETUSERMENU, menu)
  },
  [types.SYSTEM_SETLOGININFO] ({commit}, info) {
    commit(types.SYSTEM_SETLOGININFO, info)
  },
  [types.SYSTEM_SETPOSITION] ({commit}, arr) {
    commit(types.SYSTEM_SETPOSITION, arr)
  }
}
export default {
  state,
  actions,
  mutations
}
