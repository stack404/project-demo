import axios from 'axios';

/**
 * 创建axios实例
 * @param {String} baseUrl 
 */
export const getAxios = (baseUrl) => {
  const server = axios.create({
    baseURL: baseUrl,
    timeout: 15000
  });

  /**
   * 请求拦截
   */
  server.interceptors.request.use(
    config => {
      return config;
    }
  );
  
  /**
   * 响应拦截
   */
  server.interceptors.response.use(
    response => {

    }
  );

  return server;
};
