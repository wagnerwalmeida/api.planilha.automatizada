'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

	Route.resource('banks', 'BankController').apiOnly()
	Route.resource('accounts', 'AccountController').apiOnly()
	Route.resource('account_types', 'AccountTypeController').apiOnly()
	Route.resource('transactions', 'TransactionController').apiOnly()
	Route.resource('transaction_categories', 'TransactionCategoryController').apiOnly()
	// Route.resource('users', 'UserController').apiOnly()

}).prefix('api/v1')