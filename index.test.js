const CLIEngine = require('eslint').CLIEngine
const crypto = require('crypto')
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

  it('should have property `rules`', () => {
    should(config).have.property('rules')
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

  describe('Rules', () => {
    const cli = new CLIEngine({
      configFile: 'index.js'
    })

    it('should validate `max-len`', () => {
      let code

      code = `console.log('${crypto.randomBytes(32).toString('hex')}')\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `console.log('${crypto.randomBytes(33).toString('hex')}')\n`
      should(cli.executeOnText(code).errorCount).equal(1)
    })
  })
})
