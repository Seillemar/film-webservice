'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Film extends Model {
    categories () {
      return this.belongsToMany('App/Models/Category').pivotTable('movie_category')
    }
  }

  module.exports = Film