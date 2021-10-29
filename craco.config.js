// craco.config.js
const path = require(`path`);
const alias = require(`./src/config/aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
    extensions: ['.ts', '.tsx'],
  },
  jest: {
    configure: {
      roots: ['<rootDir>/src'],
      testMatch: ['<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    },
  }
};