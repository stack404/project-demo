/* import Vue from "vue";
import SvgIcon from "@/components/svg-icon";

Vue.component("svg-icon", SvgIcon); */

const requireAll = requireContext => {
  requireContext.keys().map(requireContext);
  console.log('requireContext', requireContext.keys().map(requireContext))
};

const req = require.context("./", false, /.svg$/);
requireAll(req);
