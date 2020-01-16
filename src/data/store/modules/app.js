const app = {
    state: {
        menuMode: 'vertical',//vertical,horizontal 
        sidebar: {
            thumbnail: false,
            hoverShowTitle: true
        },
        topbar: {

        },
        routes: {},
        crumb: {
            show: true,
            separator: '/',
            separatorClass: ''
        },
        tags: {
            show: true,
            activeTag: '',
            list: []
        }
    },
    mutations: {
        SET_SIDEBAR_THUMBNAIL: state => {
            state.sidebar.thumbnail = !state.sidebar.thumbnail
        },
        SET_TAGS_LIST: (state, infos) => {
            !state.tags.list.some(item => item.name == infos.name) && state.tags.list.push(infos)
        },
        DEL_TAGS_LIST: (state, name) => {
            state.tags.list = state.tags.list.filter(tab => tab.name != name)
        },
        SET_TAGS_ACTIVE: (state, name) => {
            state.tags.activeTag = name
        }
    },
    actions: {
        setSideBarThumbnail({ commit }) {
            commit('SET_SIDEBAR_THUMBNAIL')
        },
        setTagsList({ commit }, infos) {
            commit('SET_TAGS_LIST', infos)
        },
        delTagsList({ commit }, name) {
            commit('DEL_TAGS_LIST', name)
        },
        setTagsActive({ commit }, name) {
            commit('SET_TAGS_ACTIVE', name)
        }
    }
}
export default app