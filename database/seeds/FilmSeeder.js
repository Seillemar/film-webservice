'use strict'

/*
|--------------------------------------------------------------------------
| FilmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Film = use('App/Models/Film')
const Category = use('App/Models/Category')

class FilmSeeder {
  async run () {
    const films = [
      {
        nom: 'Inception',
        description: 'Thriller de science-fiction réalisé par Christopher Nolan.',
        date_parution: '2010-07-16',
        note: 4.5
      },
      {
        nom: 'The Shawshank Redemption',
        description: 'Drame carcéral basé sur la nouvelle de Stephen King.',
        date_parution: '1994-09-23',
        note: 5
      },
      {
        nom: 'The Godfather',
        description: 'Crime dramatique classique réalisé par Francis Ford Coppola.',
        date_parution: '1972-03-24',
        note: 4.8
      },
      {
        nom: 'Pulp Fiction',
        description: 'Film culte de Quentin Tarantino avec une narration non linéaire.',
        date_parution: '1994-05-21',
        note: 4.7
      },
      {
        nom: 'The Dark Knight',
        description: 'Film de super-héros réalisé par Christopher Nolan.',
        date_parution: '2008-07-18',
        note: 4.6
      },
      {
        nom: 'Schindler\'s List',
        description: 'Drame historique réalisé par Steven Spielberg.',
        date_parution: '1993-11-30',
        note: 4.9
      },
      {
        nom: 'Fight Club',
        description: 'Film culte de David Fincher explorant la psyché humaine.',
        date_parution: '1999-10-15',
        note: 4.5
      },
      {
        nom: 'Forrest Gump',
        description: 'Comédie dramatique suivant la vie de Forrest Gump.',
        date_parution: '1994-07-06',
        note: 4.7
      },
      {
        nom: 'The Matrix',
        description: 'Film de science-fiction révolutionnaire réalisé par les Wachowskis.',
        date_parution: '1999-03-31',
        note: 4.6
      },
      {
        nom: 'Casablanca',
        description: 'Classique du film noir et de la romance dirigé par Michael Curtiz.',
        date_parution: '1942-11-26',
        note: 4.8
      }
    ];

    const categories = [
      { nom: 'Thriller' },
      { nom: 'Drame' },
      { nom: 'Crime' },
      { nom: 'Comédie' },
      { nom: 'Science-fiction' },
      { nom: 'Romance' }
    ];

      // Créer les films
      const createdFilms = await Film.createMany(films)

      // Créer les catégories
      const createdCategories = await Category.createMany(categories)

      for (let film of createdFilms) {
        await film.categories().attach([createdCategories[0].id])
      }
  }
}

module.exports = FilmSeeder