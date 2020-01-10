<template>
  <div class="wrapper">
    <p>index</p>
    <el-button plain>取消</el-button>
    <el-button type="primary" v-btnHas="'IndexIndex_save'" plain>保存</el-button>
    <el-button type="success" v-btnHas="'IndexIndex_done'" plain>完成</el-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped></style>