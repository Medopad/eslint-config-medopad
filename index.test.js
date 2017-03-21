const should = require('should')
const config = require('./')

describe('Medopad\'s ESLint configuration', () => {
  it('should have property `env`', () => {
    should(config).have.property('env')
  })

  it('should have property `extends`', () => {
    should(config).have.property('extends')
  })

  it('should have property `plugins`', () => {
    should(config).have.property('plugins')
  })

  it('should have all required modules listed as dependencies', () => {
    config.extends.forEach((config) => {
      if (!config.startsWith('plugin')) {
        (() => require.resolve(`eslint-config-${config}`)).should.not.throw()
      }
    })

    config.plugins.forEach((plugin) => {
      (() => require.resolve(`eslint-plugin-${plugin}`)).should.not.throw()
    })
  })
})
