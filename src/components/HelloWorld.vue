<template>
  <div class="hello">
    <div class="box1">背景测试</div>
    <p class="box2">文字测试</p>
    <el-progress :percentage="50"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.box1 {
  @include background_color("primary");
  color: #fff;
}
</style>
