import http from '@/api/http'
export const getList = (params) => {
    http.get('list', { params })
}