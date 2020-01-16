<template>
  <div class="app-tags">
    <el-tabs v-model="activeTag" type="card" @tab-click="changTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in tagsList"
        :closable="tagsList.length>1"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <p>{{item.name}}</p>
        <router-view :name="item.name"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tags",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["app"]),
    tagsList() {
      return this.app.tags.list;
    },
    activeTag: {
      get() {
        return this.app.tags.activeTag;
      },
      set(val) {
        this.$store.dispatch("setTagsActive", val);
      }
    }
  },
  methods: {
    changTab(tag) {
      tag.name != this.$route.name &&
        this.$router.push(this.app.routes[tag.name]);
    },
    addTab() {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(tagName) {
      let tagsList = this.tagsList;
      let activeTag = this.activeTag;
      if (activeTag === tagName) {
        for (let i = 0; i < tagsList.length; i++) {
          const tab = tagsList[i];
          if (tab.name === tagName) {
            let nextTab = tagsList[i + 1] || tagsList[i - 1];
            if (nextTab) {
              this.$store.dispatch("setTagsActive", nextTab.name);
              this.$router.push(this.app.routes[nextTab.name]);
              break;
            }
          }
        }
      }
      this.$store.dispatch("delTagsList", tagName);
    }
  }
};
</script>
<style lang="stylus" scoped></style>