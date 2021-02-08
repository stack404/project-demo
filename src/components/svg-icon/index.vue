<template>
  <svg class="svg-icon">
    <use :xlink:href="`#icon-${iconClass}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    // svg icon的名字
    iconClass: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
