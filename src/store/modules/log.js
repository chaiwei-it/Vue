import * as types from '../mutation-types'

// 初始化参数
const state = {
  log: [], // 保存所有记录
  now: 0, // 当前位置索引
  isBackBtn: false, // 是否是按钮跳转的链接
  backActive: 0, // 退后按钮高亮
  forwardActive: 0 // 前进按钮高亮
}

const mutations = {
  // 实现按钮点击状态重置
  [types.PAGE_ISCHANG] (state) {
    state.isBackBtn = false
  },

  // 登录时重置
  [types.PAGE_LOGIN] (state) {
    state.log = []
    state.now = 0
    state.isBackBtn = false
    state.backActive = 0
    state.forwardActive = 0
  },

  // 记录浏览器记录
  [types.RECORD] (state, path) {
    // 判断当前索引是否是最后一个
    if (state.now < state.log.length - 1) {
      // 如果不是则抛去最后到当前索引的浏览记录
      let arr = state.log
      state.log = []
      for (let i = 0; i <= state.now; i++) {
        state.log.push(arr[i])
      }
    }
    // 添加当前浏览记录
    state.log.push(path.fullPath) // 此处应该是 fullPath  不是  path
    // 修改当前索引
    state.now = state.log.length - 1
    // 清空前进高亮样式
    state.forwardActive = 0
    // 判断是不是第一个，如果不是则高亮后退
    if (state.now > 0) {
      state.backActive = 1
    } else {
      state.backActive = 0
    }
  },

  // 后退按钮
  [types.PAGE_BACK] (state, router) {
    // 如果是最后一条记录则直接跳出
    if ((state.now - 1) < 0) {
      return
    }
    // 修改按钮点击状态
    state.isBackBtn = true
    // 走你
    state.now--
    // 计算
    Calculation(state)
    // 跳转
    router.replace({
      path: state.log[state.now]
    })
  },

  // 前进按钮
  [types.PAGE_FORWARD] (state, router) {
    // 如果是新一条的记录则直接跳出
    if ((state.now + 1) >= state.log.length) {
      return
    }
    // 修改按钮点击状态
    state.isBackBtn = true
    // 走你
    state.now++
    // 计算
    Calculation(state)
    // 跳转
    router.replace({
      path: state.log[state.now]
    })
  }
}

const actions = {
  [types.RECORD] ({
                    commit
                  }, path) {
    commit(types.RECORD, path)
  },
  [types.PAGE_BACK] ({
                       commit
                     }, router) {
    commit(types.PAGE_BACK, router)
  },
  [types.PAGE_FORWARD] ({
                          commit
                        }, router) {
    commit(types.PAGE_FORWARD, router)
  },
  [types.PAGE_ISCHANG] ({
                          commit
                        }) {
    commit(types.PAGE_ISCHANG)
  },
  [types.PAGE_LOGIN] ({
                        commit
                      }) {
    commit(types.PAGE_LOGIN)
  }
}

// 计算按钮是否高亮显示
const Calculation = (state) => {
  if (state.now > 0) {
    state.backActive = 1
  } else {
    state.backActive = 0
  }

  if (state.now + 1 === state.log.length) {
    state.forwardActive = 0
  } else {
    state.forwardActive = 1
  }
}

export default {
  state,
  actions,
  mutations
}
