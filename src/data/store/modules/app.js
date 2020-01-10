const app={
    state:{
        menuMode:'horizontal',//vertical,horizontal 
        sidebar:{
            thumbnail:false,
            hoverShowTitle:true
        },
        topbar:{

        },
        crumb:{
            show:true,
            separator:'/',
            separatorClass:''
        }
    },
    mutations:{
        SET_SIDEBAR_THUMBNAIL:state=>{
            state.sidebar.thumbnail=!state.sidebar.thumbnail
        }
    },
    actions:{
        setSideBarThumbnail({commit}){
            commit('SET_SIDEBAR_THUMBNAIL')
        }
    }
}
export default app