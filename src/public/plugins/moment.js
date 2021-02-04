/**
 * 按需引入moment
 * 使用文档 http://momentjs.cn/docs/
 */
import Vue from 'vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/es-us';
import { getStore } from '@/public/utils/storage';

// 忽略moment的警告
moment.suppressDeprecationWarnings = true;

const language = getStore('lang');

switch(language){
  case 'zh-cn': moment.locale('zh-cn'); break;
  case 'en-us': moment.locale('es-us'); break;
  default: moment.locale('es-us');break;
}

Vue.use(moment);