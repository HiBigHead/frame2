<template>
  <div>
    <template v-for="item in getMenuNavs">
      <template v-if="item.path!='*'&&item.meta.isShow">
        <el-menu-item
          v-if="!item.pathChildrenShow||item.children<1"
          :index="item.pathNav"
          :key="item.name"
        >
          <i class="el-icon-location"></i>
          <span slot="title"  :class="$route.path.match(item.pathNav)?'s-nav-active':''">{{item.meta.title}}</span>
        </el-menu-item>
        <template v-else>
          <el-submenu :index="item.pathNav" :key="item.name">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title" :class="$route.path.match(item.pathNav)?'s-nav-active':''">{{item.meta.title}}</span>
              <!-- :class="$route.path.match(item.pathNav)?'s-nav-active':''" -->
            </template>
            <template v-if="item.children">
              <MenuItem :getMenuNavs="item.children"></MenuItem>
            </template>
          </el-submenu>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    getMenuNavs: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped></style>