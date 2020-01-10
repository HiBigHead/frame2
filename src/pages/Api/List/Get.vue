<template>
  <div class="wrapper">
      <p>Get</p>
    <el-button type="primary" v-btnHas="'ApiListGet_save'" plain>保存</el-button>
    <p><router-link to='/api/list/detail'>Detail</router-link></p>

  </div>
</template>

<script>
export default {
  name:'ApiListGet',
  data(){
    return {
    }
  },
}
</script>
<style lang="stylus" scoped></style>