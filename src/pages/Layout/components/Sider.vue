<!-- Sider -->
<template>
  <div class="app-sider">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition='false'
      router
      :mode="mode"
    >
        <MenuItem :getMenuNavs='getMenuNavs'/>

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuItem from './MenuItem'
export default {
  name: "Sider",
  props:{
    mode:String
  },
  components:{
    MenuItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["app", "permission"]),
    getMenuNavs() {
      console.log(this.mode);
      
      return this.permission.menuNavs;
    },
    isCollapse() {
      return this.app.sidebar.thumbnail;
    }
  }
};
</script>
<style lang="stylus" scoped></style>
