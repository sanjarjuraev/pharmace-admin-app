/** @format */

// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'babel-plugin-lodash',
  ],
};
