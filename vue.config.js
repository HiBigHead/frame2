const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    chainWebpack: config => {
      config.resolve.alias
      .set("@", resolve("src"))
      .set("routerF", resolve("src/router"))
      .set("apiF", resolve("src/data/api"))
      .set("commonF", resolve("src/common"))
    }
  }