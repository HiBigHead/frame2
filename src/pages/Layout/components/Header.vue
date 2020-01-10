<!-- Header -->
<template>
  <div class="app-header">
    <div class="left" :class='{"left_thumbnail":siderThumbnail}'>left</div>
    <div class="right">
      <el-button v-if='showSider' @click='setSiderThumbnail' type="primary" :icon="siderThumbnail?'el-icon-s-unfold':'el-icon-s-fold'"></el-button>
      <Sider v-if='!showSider' :mode='getMenuSider'></Sider>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sider from "./Sider";
export default {
  name: "Header",
  components:{
    Sider
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["app"]),
    showSider(){
      return this.app.menuMode=="vertical"
    },
    getMenuSider(){
      return this.app.menuMode
    },
    siderThumbnail(){
      return this.app.sidebar.thumbnail
    }
  },
  methods:{
    setSiderThumbnail(){
      this.$store.dispatch('setSideBarThumbnail')
    }
  }
};
</script>
<style lang="stylus" scoped></style>
