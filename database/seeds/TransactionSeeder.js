'use strict'

/*
|--------------------------------------------------------------------------
| TransactionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TransactionSeeder {
  async run () {
    await Factory
			.model('App/Models/Transaction')
			.createMany(200)
  }
}

module.exports = TransactionSeeder
