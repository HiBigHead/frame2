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
function filterPage(pagesRouterList, pages, parentPathNav, parentPathIndex) {
    let currentPathNav = parentPathNav || ''
    let currentPathIndex = parentPathIndex || ''
    for (let i = 0; i < pagesRouterList.length; i++) {
        let item = pagesRouterList[i]
        if (item.path == '*') continue
        let hasPermission = pages.some(item2 => item2.code == item.name)
        let pathChildrenShow = item.children && item.children.some(item2 => item2.meta.isShow === true)
        if (!hasPermission) {
            pagesRouterList.splice(i, 1)
            i != pagesRouterList.length && filterPage(pagesRouterList, pages, currentPathNav)
            break
        } else {
            item.pathChildrenShow = pathChildrenShow
            item.pathIndex = currentPathIndex == '' ? i + 1 : currentPathIndex + '-' + (i + 1)
            if (item.children && item.children.length == 1 && !item.children[0].meta.isShow) {
                item.pathNav = currentPathNav + (currentPathNav == '' ? '' : '/') + item.path + '/' + item.children[0].path
            } else {
                item.pathNav = currentPathNav + (currentPathNav == '' ? '' : '/') + item.path
            }

            if (item.meta.isShow && pathChildrenShow) {
                filterPage(item.children, pages, item.pathNav, item.pathIndex)
            }
        }
    }
}