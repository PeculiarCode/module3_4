import request from '../axios'
export const getMenuList = (pageIndex, pageSize) => {
  return request({
    url: '/users/GitHub-Laziji/followers',
    method: 'get',
    params: {
      page: pageIndex,
      per_page: pageSize
    }
  })
}
