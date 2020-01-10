import { constantRouterList, pagesRouterList } from 'routerF'
import * as api from 'apiF/Permission'
import { filterRouters } from 'commonF/permission/filter'
const permission = {
    state: {
        routers: constantRouterList,
        addRouters: [],
        // 导航菜单
        menuNavs: [],
        // 按钮权限
        btnPermissions: [],
        // 数据权限
        dataPermissionArr: [],
        // 缓存页面name数组
        cachedViews: []
    },
    mutations: {
        // 路由
        SET_ROUTERS(state, routers) {
            state.addRouters = routers
            state.routers = constantRouterList.concat(routers)
        },
        // 菜单
        SET_MENUNAVS(state, menuNavs) {
            state.menuNavs = menuNavs
        },
        // 按钮
        SET_BTNPERMISSIONS(state, btns) {
            state.btnPermissions = btns
        },
    },
    actions: {
        GenerateRoutes({ commit }) {
            return new Promise((resolve, reject) => {
                api.getPermissionApi().then(res => {
                    let routerObj = filterRouters(pagesRouterList, res)
                    commit('SET_ROUTERS', routerObj.router)
                    commit('SET_MENUNAVS', routerObj.router)
                    commit('SET_BTNPERMISSIONS', routerObj.btns)
                    resolve()
                }).catch(_ => {
                    reject(_)
                })

            })
        }
    }
}

export default permission