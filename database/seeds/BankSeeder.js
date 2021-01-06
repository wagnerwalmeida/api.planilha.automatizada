'use strict'

/*
|--------------------------------------------------------------------------
| BankSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BankSeeder {
	async run() {
		await Factory
			.model('App/Models/Bank')
			.createMany(5)
	}
}

module.exports = BankSeeder
