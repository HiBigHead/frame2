<!-- Sider -->
<template>
  <div :class="mode=='vertical'?'app-sider':''">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      :mode="mode"
    >
      <template v-for="item in getMenuNavs">
        <template v-if="item.path!='*'&&item.meta.isShow">
          <el-menu-item
            v-if="!item.pathChildrenShow||item.children<1"
            :index="item.pathNav"
            :key="item.name"
          >
            <i class="el-icon-location"></i>
            <span
              slot="title"
              :class="$route.path.match(item.pathNav)?'s-nav-active':''"
            >{{item.meta.title}}</span>
          </el-menu-item>
          <template v-else>
            <el-submenu :index="item.pathNav" :key="item.name">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span
                  slot="title"
                  :class="$route.path.match(item.pathNav)?'s-nav-active':''"
                >{{item.meta.title}}</span>
                <!-- :class="$route.path.match(item.pathNav)?'s-nav-active':''" -->
              </template>
              <template v-if="item.children">
                <template v-for="item2 in item.children">
                  <template v-if="item2.path!='*'&&item2.meta.isShow">
                    <el-menu-item
                      v-if="!item2.pathChildrenShow||item2.children<1"
                      :index="item2.pathNav"
                      :key="item2.name"
                    >
                      <i class="el-icon-location"></i>
                      <span
                        slot="title"
                        :class="$route.path.match(item2.pathNav)?'s-nav-active':''"
                      >{{item2.meta.title}}</span>
                    </el-menu-item>
                    <template v-else>
                      <el-submenu :index="item2.pathNav" :key="item2.name">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span
                            slot="title"
                            :class="$route.path.match(item2.pathNav)?'s-nav-active':''"
                          >{{item2.meta.title}}</span>
                          <!-- :class="$route.path.match(item.pathNav)?'s-nav-active':''" -->
                        </template>
                        <template v-if="item2.children">
                          <template v-if="item2.children">
                            <template v-for="item3 in item2.children">
                              <template v-if="item3.path!='*'&&item3.meta.isShow">
                                <el-menu-item
                                  v-if="!item3.pathChildrenShow||item3.children<1"
                                  :index="item3.pathNav"
                                  :key="item3.name"
                                >
                                  <i class="el-icon-location"></i>
                                  <span
                                    slot="title"
                                    :class="$route.path.match(item3.pathNav)?'s-nav-active':''"
                                  >{{item3.meta.title}}</span>
                                </el-menu-item>
                                <template v-else>
                                  <el-submenu :index="item3.pathNav" :key="item3.name">
                                    <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span
                                        slot="title"
                                        :class="$route.path.match(item3.pathNav)?'s-nav-active':''"
                                      >{{item3.meta.title}}</span>
                                      <!-- :class="$route.path.match(item.pathNav)?'s-nav-active':''" -->
                                    </template>
                                  </el-submenu>
                                </template>
                              </template>
                            </template>
                          </template>
                        </template>
                      </el-submenu>
                    </template>
                  </template>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sider",
  props: {
    mode: String
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["app", "permission"]),
    getMenuNavs() {
      return this.permission.menuNavs;
    },
    isCollapse() {
      return this.app.sidebar.thumbnail;
    }
  }
};
</script>
<style lang="stylus" scoped></style>
