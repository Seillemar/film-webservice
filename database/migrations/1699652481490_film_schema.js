'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateFilmsSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('nom', 128).notNullable()
      table.text('description', 2048).notNullable()
      table.date('date_parution').notNullable()
      table.integer('note').unsigned().notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = CreateFilmsSchema