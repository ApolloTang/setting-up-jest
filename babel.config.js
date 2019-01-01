const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"IE":"11"}
        , "useBuiltIns": "entry" // see: https://github.com/babel/babel/issues/8829
        , "modules": isTest ? "commonjs" : "false"
      }
    ],
    "@babel/preset-react",
  ];

  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    isTest ? 'babel-plugin-dynamic-import-node' : null
  ].filter(Boolean);

  return {
    presets,
    plugins
  }
}
