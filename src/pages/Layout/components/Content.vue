<!-- Content -->
<template>
  <div class="app-content">
    <Crumb v-if="this.app.crumb.show"></Crumb>
    <div class="app-content-cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Crumb from "./Crumb";
import { mapGetters } from "vuex";
export default {
  name: "Content",
  components: {
    Crumb
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["app"])
  }
};
</script>
<style lang="stylus" scoped></style>
