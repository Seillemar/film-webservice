'use strict'

const Schema = use('Schema')

class MovieCategorySchema extends Schema {
  up () {
    this.create('movie_category', (table) => {
      table.increments()
      table.integer('film_id').unsigned().references('id').inTable('films')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('movie_category')
  }
}

module.exports = MovieCategorySchema