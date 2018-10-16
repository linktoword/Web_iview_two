import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test' // 测试模块store
import commonStore from './common/common' // 公共的store
import actions from './actions' // 根级别的 action
import mutations from './mutations' // 根级别的 mutation

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        test,
        commonStore
    }
})