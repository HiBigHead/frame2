<!-- Layout -->
<template>
  <div class="app-page">
    <Header></Header>
    <Tags v-if="showTags"></Tags>
    <Sider v-if='showSider' :mode='getMenuSider' :class='{"app-sider_nail":this.app.sidebar.thumbnail}'></Sider>
    <Content v-if="!showTags" :class='{"app-content_nosider":!showSider,"app-content_thumbnail":showSider&&this.app.sidebar.thumbnail,"app-content_crumb":this.app.crumb.show}'></Content>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sider from "./components/Sider";
import Tags from "./components/Tags";
import Content from "./components/Content";
import { mapGetters } from 'vuex'
export default {
  name: "Layout",
  components: {
    Header,
    Tags,
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
    showTags(){
      return this.app.tags.show
    },
    getMenuSider(){
      return this.app.menuMode
    },
  }
};
</script>
<style lang="stylus" scoped></style>
