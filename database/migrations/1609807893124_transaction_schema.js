'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.date('date')
      table.string('description')
      table.float('value')
      table.enu('type', ['Entrada', 'Saída'])
      table.integer('account_id').nullable().unsigned().references('id').inTable('accounts')
      table.integer('transaction_category_id').unsigned().references('id').inTable('transaction_categories')
      table.boolean('cash')
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
