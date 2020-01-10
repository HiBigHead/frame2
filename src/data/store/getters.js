//页面仓库
import pages from './modules/index'
let pagesGetters = {}
Object.keys(pages).forEach(item => {
  pagesGetters[item] = state => state[item]
})
const getters = {
  permission: state => state.permission,
  app: state => state.app,
  ...pagesGetters
}
export default getters