<template>
  <div class="wrapper">
    <p>
      <el-button @click="changeTxt">change</el-button>
    </p>
    <p>{{text}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      text: "未变"
    };
  },
  methods: {
    changeTxt() {
      this.text = "以变";
    }
  }
};
</script>
<style lang="stylus" scoped></style>