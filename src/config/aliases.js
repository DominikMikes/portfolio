const aliases = (prefix = `src`) => ({
    '@data': `${prefix}/data`,
    '@templates': `${prefix}/components/templates`,
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@enums': `${prefix}/enums`,
    '@hooks': `${prefix}/hooks`,
    '@icons': `${prefix}/components/atoms/Icons`,
    '@styles': `${prefix}/styles`,
    '@utils': `${prefix}/utils`,
    '@state': `${prefix}/state`,
    // '@storybookHelpers': `../.storybook/helpers`,
  });
  
  module.exports = aliases;