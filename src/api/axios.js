import { getAxios } from './interceptor';

// 本项目基础服务地址
const baseUrl = process.env.VUE_APP_BASE_URL;

export default {
  axios: getAxios(baseUrl)
}