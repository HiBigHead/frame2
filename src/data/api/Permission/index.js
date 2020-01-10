import axiosApi from '@/common/utils/axiosApi'
import * as filter from './filter'
export function getPermissionApi(params) {
    return axiosApi({
        url: '/permission',
        method: 'get',
        filter: filter.getPermissionApi,
        params: params
    })

}
