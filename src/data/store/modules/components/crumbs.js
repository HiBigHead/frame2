const crumbs = {
    state: {
        indexPage: [
            {
                path: '/home',
                meta: {
                    title: '首页',
                }
            }
        ],
        crumbsList: []
    },
    mutations: {
        SET_CRUMBS(state, list) {
            state.crumbsList = list
            // state.crumbsList = state.indexPage.concat(list)
        }
    },
    actions: {
        setCrumbs({ commit }, list) {
            commit("SET_CRUMBS", list)
        }
    }
}
export default crumbs