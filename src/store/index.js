import Vue from 'vue';
import Vuex from 'vuex';
import { autoImportModuleFiles } from '../public/utils';

Vue.use(Vuex);

const modules = autoImportModuleFiles(require.context('./modules', false, /\.js$/));

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});
