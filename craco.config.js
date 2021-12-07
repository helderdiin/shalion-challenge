/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = {
  plugins: [{ plugin: fastRefreshCracoPlugin }],
  webpack: {
    alias: {
      '~/': path.resolve(__dirname, 'src/'),
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/api': path.resolve(__dirname, 'src/api'),
      '~/routes': path.resolve(__dirname, 'src/routes'),
      '~/scenes': path.resolve(__dirname, 'src/scenes'),
      '~/locales': path.resolve(__dirname, 'src/locales'),
      '~/modules': path.resolve(__dirname, 'src/modules'),
      '~/services': path.resolve(__dirname, 'src/services'),
      '~/stores': path.resolve(__dirname, 'src/stores'),
      '~/theme': path.resolve(__dirname, 'src/theme'),
      '~/utils': path.resolve(__dirname, 'src/utils'),
      '~/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
