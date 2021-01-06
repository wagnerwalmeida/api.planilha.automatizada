'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionCategorySchema extends Schema {
  up () {
    this.create('transaction_categories', (table) => {
      table.increments()
      table.string('name')
      table.integer('transaction_category_id').nullable().unsigned().references('id').inTable('transaction_categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('transaction_categories')
  }
}

module.exports = TransactionCategorySchema
