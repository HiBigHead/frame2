import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

//页面仓库
import pages from './modules/index'
//全局配置
import app from './modules/app'
//权限
import permission from './modules/permission'
const store=new Vuex.Store({
    modules: {
      app,
      permission,
      ...pages
    },
    getters
  })

export default store
