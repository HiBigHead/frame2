import { deepClone } from '../utils/index'
import store from '../../data/store'
// 过滤动态路由
export function filterRouters(pagesRouterList, res) {
    let btns = []
    let pages = []
    filter(res.data.permission.page.children, btns, pages)
    filterPage(pagesRouterList, pages)
    return {
        router: pagesRouterList,
        btns: btns
    }
}
function filter(data, btns, pages, dep = 0) {
    data.forEach(function (item) {
        if (item.code.match('_')) {
            btns.push(item.code)
        } else {
            pages.push({ code: item.code, dep: dep })
        }
        if (item.children && item.children.length > 0) {
            filter(item.children, btns, pages, dep++)
        }
    })
}
function filterPage(pagesRouterList, pages, parentPathNav, circulI) {
    let currentPathNav = parentPathNav || ''
    let forI = circulI || 0

    for (let i = forI; i < pagesRouterList.length; i++) {
        let item = pagesRouterList[i]
        if (store.getters.app.tags.show && item.path[0] != '/') {
            //tags过滤
            let itemCopy = deepClone(item)
            item.components = {}
            item.components[item.name] = itemCopy.component
            delete item.component
        }
        if (item.path == '*') continue
        let hasPermission = pages.some(item2 => item2.code == item.name)
        let pathChildrenShow = item.children && item.children.some(item2 => item2.meta.isShow === true)
        if (!hasPermission) {
            pagesRouterList.splice(i, 1)
            i != pagesRouterList.length && filterPage(pagesRouterList, pages, currentPathNav, i)
            break
        } else {
            if (store.getters.app.tags.show) {
                //tags过滤
                store.getters.app.routes[item.name] = item
            }
            item.pathChildrenShow = pathChildrenShow
            if (item.children && item.children.length == 1 && !item.children[0].meta.isShow) {
                if (store.getters.app.tags.show) {
                    //tags过滤
                    let itemCopyChild = deepClone(item.children[0])
                    store.getters.app.routes[itemCopyChild.name] = itemCopyChild
                    item.children[0].components = {}
                    item.children[0].components[item.children[0].name] = itemCopyChild.component
                    delete item.children[0].component
                }
                item.pathNav = currentPathNav + (currentPathNav == '' ? '' : '/') + item.path + '/' + item.children[0].path
            } else {
                item.pathNav = currentPathNav + (currentPathNav == '' ? '' : '/') + item.path
            }
            if (item.meta.isShow && pathChildrenShow) {
                filterPage(item.children, pages, item.pathNav)
            }
        }
    }
}