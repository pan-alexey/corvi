const presets =  [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // or "entry"
      corejs: 3,
      targets: {
        browsers: "ie >= 9",
      },
    },
  ],
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/plugin-transform-modules-commonjs",
];

module.exports = { presets, plugins };