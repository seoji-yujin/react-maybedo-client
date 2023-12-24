import axios from './config';

const PREFIX_URL = '/group';

/**
 * 그룹을 생성한다.
 */
export function createGroup(params) {
  return axios.post(`${PREFIX_URL}/create`, params);
}

/**
 * 그룹에 가입한다.
 */
export function joinGroup(gropuId) {
  return axios.post(`${PREFIX_URL}/join/${gropuId}`);
}

/**
 * 그룹을 탈퇴한다.
 */
export function deleteGroup(gropuId) {
  return axios.delete(`${PREFIX_URL}/${gropuId}`);
}

/**
 * 그룹 공지를 작성한다.
 */
export function createGroupNotice(groupId, params) {
  return axios.post(`${PREFIX_URL}/${groupId}/notice`, params);
}

/**
 * 그룹 공지를 수정한다.
 */
export function updateGroupNotice(groupId, noticeId, params) {
  return axios.put(`${PREFIX_URL}/${groupId}/notice/${noticeId}`, params);
}

/**
 * 그룹 공지를 삭제한다.
 */
export function deleteGroupNotice(groupId, noticeId) {
  return axios.delete(`${PREFIX_URL}/${groupId}/notice/${noticeId}`);
}
