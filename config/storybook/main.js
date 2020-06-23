const path = require('path');


module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-storysource',
    '@storybook/addon-docs'
  ],

  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
