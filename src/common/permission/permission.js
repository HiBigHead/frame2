import router from '../../router'
import store from '../../data/store'


router.beforeEach(async (to, from, next) => {
    if (store.getters.permission.addRouters.length === 0) {
        store
            .dispatch('GenerateRoutes').then(() => {
                router.addRoutes(store.getters.permission.addRouters.concat({ path: '*', redirect: '/404' }))
                next({ ...to, replace: true })
            }).catch(err => {
                console.log(err)
            })
    } else {
        next()
    }
})
router.afterEach(to => {
    store
    .dispatch('setCrumbs',to.matched)
})

