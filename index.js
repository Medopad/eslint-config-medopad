module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:lodash/recommended'
  ],
  plugins: [
    'standard',
    'node',
    'import',
    'promise',
    'lodash'
  ],
  rules: {
    'max-len': 'error',
    'lodash/prefer-lodash-method': [
      'error',
      {
        'ignoreMethods': [
          'filter',
          'forEach',
          'map',
          'reduce'
        ]
      }
    ]
  }
}
