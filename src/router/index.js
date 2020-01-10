import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/pages/' + file + '.vue')
Vue.use(Router)

export const constantRouterList = [
    { path: '/login', component: _import('Constant/Login') },
    { path: '/register', component: _import('Constant/Register') },
    { path: '/404', component: _import('Constant/Error') },
    { path: '', redirect: '/home' }
]

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: constantRouterList
})
export const pagesRouterList = [
    {
        path: '/home',
        redirect: '/home/index',
        component: _import('Layout/index'),
        name: 'Index',
        meta: {
            title: '首页',
            icon: '',
            sort: '',
            isShow: true,
            noCache: false
        },
        children: [
            {
                path: 'index',
                component: _import('Index/index'),
                meta: {
                    title: '首页',
                    icon: '',
                    sort: '',
                    isShow: false,
                    noCache: false
                }, name: 'IndexIndex',
            }
        ]
    },
    {
        path: '/datamanagement',
        component: _import('Layout/index'),
        redirect: '/datamanagement/index',
        name: 'Datamanagement',
        meta: {
            title: '数据管理',
            icon: '',
            sort: '',
            isShow: true,
            noCache: false
        },
        children: [
            {
                path: 'index',
                component: _import('DataManagement/index'),
                name: 'DatamanagementIndex',
                meta: {
                    title: '数据管理',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                },
            },
            {
                path: 'api',
                component: _import('DataManagement/Set'),
                name: 'DatamanagementSet',
                meta: {
                    title: '数据设置',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                },
            }
        ]
    },
    {
        path: '/api',
        component: _import('Layout/index'),
        redirect: '/api/index',
        name: 'Api',
        meta: {
            title: 'API管理',
            icon: '',
            sort: '',
            isShow: true,
            noCache: false
        },
        children: [
            {
                path: 'index',
                component: _import('Api/index'),
                name: 'ApiIndex', meta: {
                    title: 'API管理',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                }
            },
            {
                path: 'list',
                component: _import('Api/List'),
                redirect: 'list/get',
                name: 'ApiList',
                meta: {
                    title: 'API列表',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                }, children: [
                    {
                        path: 'get',
                        component: _import('Api/List/Get'),
                        name: 'ApiListGet',
                        meta: {
                            title: 'API列表get1',
                            icon: '',
                            sort: '',
                            isShow: true,
                            noCache: false
                        },
                        children: [
                            
                        ]
                    }, {
                        path: 'post',
                        component: _import('Api/List/Post'),
                        name: 'ApiListPost',
                        meta: {
                            title: 'API列表post',
                            icon: '',
                            sort: '',
                            isShow: true,
                            noCache: false
                        }
                    },{
                        path: 'detail',
                        component: _import('Api/List/Detail'),
                        name: 'ApiListDetail',
                        meta: {
                            title: 'Detail',
                            icon: '',
                            sort: '',
                            isShow: false,
                            noCache: false
                        },
                    }
                ]
            },
            {
                path: 'set',
                component: _import('Api/Set'),
                name: 'ApiSet',
                meta: {
                    title: 'API设置',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                }
            }
        ]
    },
    {
        path: '/goods',
        component: _import('Layout/index'),
        redirect: '/goods/index',
        name: 'Goods',
        meta: {
            title: '货物管理',
            icon: '',
            sort: '',
            isShow: true,
            noCache: false
        },
        children: [
            {
                path: 'index',
                component: _import('Goods/index'),
                name: 'GoodsIndex', meta: {
                    title: '货物入库管理',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                }
            },
            {
                path: 'list',
                component: _import('Goods/List'),
                name: 'GoodsList', meta: {
                    title: '货物清单',
                    icon: '',
                    sort: '',
                    isShow: true,
                    noCache: false
                }
            }
        ]
    },
    {
        path: '/setting',
        component: _import('Layout/index'),
        redirect: '/setting/list',
        // component: _import('Setting/index'),
        name: "Setting",
        meta: {
            title: '设置',
            icon: '',
            sort: '',
            isShow: true,
            noCache: false
        },
        children: [
            {
                path: 'list',
                component: _import('Goods/List'),
                name: 'SettingGoodsList', meta: {
                    title: '货物清单',
                    icon: '',
                    sort: '',
                    isShow: false,
                    noCache: false
                }
            }
        ]
    }
]

