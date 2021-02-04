/**
 * 国际化js
 * 使用：$t(your i18n name )
 * 拓展语言：
 *    在messages中添加，如  "zh-HK": require("./zh-HK").defalut
 */
import VueI18n from 'vue-i18n';
import Vue from 'vue';
import { getStore } from '@/public/utils/storage';

Vue.use(VueI18n);
const lang = getStore('lang');

const i18n = new VueI18n({
  locale: lang,
  silentFallbackWarn: true,//抑制警告
  messages: {
    'zh-CN': require('./zh-cn/index').default,
    'en-US': require('./en-us/index').default,
  }
});

export default i18n;
