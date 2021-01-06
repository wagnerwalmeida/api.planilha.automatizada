'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BankSchema extends Schema {
  up () {
    this.create('banks', (table) => {
      table.increments()
      table.string('name', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('banks')
  }
}

module.exports = BankSchema
