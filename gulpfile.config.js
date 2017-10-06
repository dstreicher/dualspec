var path = require('path');

module.exports = {
  sourcemapsOptions: {
    includeContent: false,
    sourceRoot: path.join(__dirname, 'src/app/')
  },
  sassOptions: {
    includePaths: [
      './node_modules/',
      './assets/scss/'
    ]
  },
  vendorSources: []
};
