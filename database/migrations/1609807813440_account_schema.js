'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.integer('bank_id').unsigned().references('id').inTable('banks')
      table.bigInteger('number')
      table.integer('digit')
      table.string('agency', 5)
      table.integer('account_type_id').unsigned().references('id').inTable('account_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
