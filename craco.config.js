const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@svgs': path.resolve(__dirname, 'src/assets/svgs/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@data': path.resolve(__dirname, 'src/data/'),
      '@libs': path.resolve(__dirname, 'src/libs/'),
      '@stores': path.resolve(__dirname, 'src/stores/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@theme': path.resolve(__dirname, 'src/theme'),
    },
  },
};
