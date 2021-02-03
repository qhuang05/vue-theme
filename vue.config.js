module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/theme/theme.scss";`,
      },
    },
  },
};
