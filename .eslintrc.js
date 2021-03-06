const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": "@ok/eslint-config-ok",
  "rules": {
    "class-methods-use-this": 0
  },
  "env": {
    "browser": true
  },
  "settings": {
    'import/resolver': {
      alias: {
        map: [
          ['_src', path.resolve(__dirname, './src/')]
        ],
        extensions: ['.js', '.less', '.jsx']
      }
    }
  }
}
