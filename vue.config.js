module.exports = {
  css: {
    sourceMap: true,
    extract: false
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  lintOnSave: undefined
}

process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : process.env.STORYBLOK_PUBLIC_TOKEN

process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE
