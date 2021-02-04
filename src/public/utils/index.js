/**
 * @description 自动批量引用文件
 * @param {Object} context 
 * @param {RegExp} reg 
 * @returns {Object} module 返回一个对象{ key: value}
 */
export const autoImportModule = context => {
  const contextKeys = context.keys();
  let module = {};
  contextKeys.forEach(key => {
    module = {
      ...module,
      ...context(key).default
    };
  });
  return module;
};

/**
 * @description 自动批量引入模块，根据文件名生成二级module
 * @param {Object} context 
 * @returns {Object} module 如： ./store/app.js ./store/user.const.js => { app: {}, user: {} }
 */
export const autoImportModuleFiles = context => {
  const contextkeys = context.keys();
  const modulesFiles = contextkeys.reduce((modules, modulePath) => {
    const fileName = modulePath.split('/').pop();
    const moduleName = fileName.split('.').shift();
    const value = context(modulePath);
    modules[moduleName] = value.default;
    return modules;
  },{}); // 使用reduce 一定要给初始值，不然默认第一个modules为数组内部第一个元素
  return modulesFiles;
}