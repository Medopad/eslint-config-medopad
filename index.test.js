const CLIEngine = require('eslint').CLIEngine
const crypto = require('crypto')
const should = require('should')

const forEach = require('lodash').forEach
const startsWith = require('lodash').startsWith

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
    forEach(config.extends, (config) => {
      if (!startsWith(config, 'plugin')) {
        (() => require.resolve(`eslint-config-${config}`)).should.not.throw()
      }
    })

    forEach(config.plugins, (plugin) => {
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

    it('should validate `lodash/prefer-constant`', () => {
      let code

      code = `module.exports = { pi: () => 3.1415 }\n`
      should(cli.executeOnText(code).errorCount).equal(0)
    })

    it('should validate `lodash/prefer-lodash-method`', () => {
      let code

      code = `[].filter()\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `[].forEach()\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `[].map()\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `[].reduce()\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `'a-b-c'.split('-')\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `'LONDON'.toLowerCase()\n`
      should(cli.executeOnText(code).errorCount).equal(0)

      code = `'london'.toUpperCase()\n`
      should(cli.executeOnText(code).errorCount).equal(0)
    })
  })
})
