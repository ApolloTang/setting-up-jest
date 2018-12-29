module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"IE":"11"},
        "useBuiltIns": "usage"
      }
    ]
  ];
  const plugins = [
    "@babel/proposal-class-properties"
  ];
  return {
    presets,
    plugins
  }
}
