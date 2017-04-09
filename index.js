module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended'
  ],
  plugins: [
    'standard',
    'node',
    'import',
    'promise'
  ],
  rules: {
    'max-len': 'error'
  }
}
