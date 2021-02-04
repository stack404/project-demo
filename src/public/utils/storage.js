/**
 * 存储 localStorage
 * @param {string} name
 * @param {any} content
 */
export const setStore = (name, content) => {
  if (!name) {
    return;
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 * @param {string} name
 * @returns {string} 返回字符串形式的值
 */
export const getStore = name => {
  if (!name) {
    return;
  }

  let content = window.localStorage.getItem(name);
  return content;
};

/**
 * 清除localStorage
 * @param {string} name
 */
export const removeStore = name => {
  if (!name) {
    return;
  }
  window.localStorage.removeItem(name);
};
