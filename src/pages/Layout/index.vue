<!-- Layout -->
<template>
  <div class="app-page">
    <Header></Header>
    <Sider v-if='showSider' :mode='getMenuSider' :class='{"app-sider_nail":this.app.sidebar.thumbnail}'></Sider>
    <Content :class='{"app-content_nosider":!showSider,"app-content_thumbnail":showSider&&this.app.sidebar.thumbnail,"app-content_crumb":this.app.crumb.show}'></Content>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Content from "./components/Content";
import { mapGetters } from 'vuex'
export default {
  name: "Layout",
  components: {
    Header,
    // Footer,
    Sider,
    Content
  },
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['app']),
    showSider(){
      return this.app.menuMode=="vertical"
    },
    getMenuSider(){
      return this.app.menuMode
    },
  }
};
</script>
<style lang="stylus" scoped></style>
