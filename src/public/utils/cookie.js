import Cookies from 'js-cookie';
/**
 * 存储localStorage
 * @param {string} name cookie对象的名称
 * @param {any} value cookie对象的值
 * @param {number} minute cookie对象的过期时间，单位/分钟
 */
export const setCookie = (name, content, minute) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  const date = new Date();
  const expires = new Date(date.getTime() + minute * 60 * 1000);
  Cookies.set(name, content, { expires: expires });
};

/**
 * 获取localStorage
 */
export const getCookie = name => {
  if (!name) return;
  let content = Cookies.get(name);
  try {
    content = JSON.parse(content);
    return content;
  } catch (e) {
    return content;
  }
};

/**
 * 删除localStorage
 */
export const removeCookie = name => {
  if (!name) return;
  Cookies.remove(name);
};
