const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_mixins.scss";
          `,
      },
    },
    
  },
  outputDir: path.resolve(__dirname, "./docs"),
  publicPath: process.env.NODE_ENV === 'production'
  ? '/AliakbarSu.github.io.test/'
  : '/'
};
