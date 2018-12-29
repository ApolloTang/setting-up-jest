const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"IE":"11"}
        , "useBuiltIns": "usage"
        , "modules": isTest ? "commonjs" : "false"
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
