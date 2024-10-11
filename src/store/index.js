/*
 * @Descripttion: 
 * @Date: 2021-12-31 10:00:02
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import global from './modules/global'
import common from './modules/common';

export default createStore({
  // 全局模块
  ...global,
  // 局部模块
  modules: {
    common,
  },
  plugins: [createPersistedState()]
})