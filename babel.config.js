const presets =  [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: "ie >= 9",
      },
    },
  ],
];

const plugins = [
    "@babel/proposal-class-properties",
];

module.exports = { presets, plugins };