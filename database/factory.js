'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const AccountType = use('App/Models/AccountType')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Bank', (faker) => {
    return {
        name: faker.company()
    }
})

Factory.blueprint('App/Models/AccountType', (faker) => {
    return {
        name: faker.username()
    }
})

Factory.blueprint('App/Models/Account', (faker) => {
    return {
        bank_id: faker.integer({ min: 1, max: 5 }),
        account_type_id: faker.integer({ min: 1, max: 3 }),
        number: faker.integer({ min: 10000, max: 999999999 }),
        digit: faker.integer({ min: 0, max: 9 }),
        agency: faker.pad(faker.integer({ min: 0, max: 300 }), 5)
    }
})

Factory.blueprint('App/Models/TransactionCategory', (faker) => {
    return {
        name: faker.username()
    }
})

Factory.blueprint('App/Models/Transaction', (faker) => {
    const cash = faker.bool()
    return {
        date: (() => {
            const date = faker.date({ string: true, american: false, year: 2021 }).split('/')
            return `${faker.pad(date[2], 2)}-${faker.pad(date[1], 2)}-${date[0]}`
        }),
        description: faker.sentence({ words: 3 }),
        value: faker.floating({ min: 0, max: 10000 }),
        type: faker.pickone(['Entrada', 'Saída']),
        cash,
        account_id: cash ? null : faker.integer({ min: 1, max: 5 }),
        transaction_category_id: faker.integer({ min: 1, max: 20 })
    }
})
