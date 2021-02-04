module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  // 添加Eslint规则，https://cn.eslint.org/docs/rules/
  rules: {
    "no-extra-parens": [1, "functions"],  // 在函数表达式周围禁止不必要的圆括号
    "array-callback-return": 1, //强制数组方法的回调函数中有 return 语句 from every filter find findIndex map reduce reduceRight some sort
    "no-unused-vars": [1,{
      "vars": "all",  // 检查所有变量
      "args": "none" // 不检查参数
    }],
    "quotes": [1, "single",{  // 使用单引号
      "avoidEscape": true,  // 字符串包含其他引号，允许使用双引号
      "allowTemplateLiterals": true // 允许字符串使用反引号``
    }],

  }
};
