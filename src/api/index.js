import request from '../axios'
export const getFollowerList = (pageIndex, pageSize) => {
  return request({
    url: '/users/GitHub-Laziji/followers',
    method: 'GET',
    params: {
      page: pageIndex,
      per_page: pageSize
    }
  })
}
export const getFollowingList = (pageIndex, pageSize) => {
  return request({
    url: '/users/GitHub-Laziji/following',
    method: 'GET',
    params: {
      page: pageIndex,
      per_page: pageSize
    }
  })
}
export const getUserDetail = user => {
  return request({
    url: `/users/${user}`,
    method: 'GET'
  })
}
export const getBlog = (pageIndex, pageSize) => {
  return request({
    url: `/users/GitHub-Laziji/gists`,
    method: 'GET',
    params: {
      page: pageIndex,
      per_page: pageSize
    }
  })
}
export const getOpen = (pageIndex, pageSize) => {
  return request({
    url: `/users/GitHub-Laziji/repos`,
    method: 'GET',
    params: {
      page: pageIndex,
      per_page: pageSize
    }
  })
}
export const getDetail = name => {
  return request({
    url: `repos/GitHub-Laziji/${name}`,
    method: 'GET'
  })
}
export const getRead = () => {
  return request({
    url: `/repos/GitHub-Laziji/GitHub-Laziji.github.io/contents/README.md`,
    method: 'GET'
  })
}
