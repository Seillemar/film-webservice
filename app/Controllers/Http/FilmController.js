'use strict'

const Film = use('App/Models/Film')

class FilmController {
  async index({ response }) {
    const films = await Film.all()
    return response.status(200).json(films)
  }

  async store({ request, response }) {
    try {
      const data = request.only(['nom', 'description', 'date_parution', 'note'])
      const film = await Film.create(data)
      return response.status(201).json(film)
    } catch (error) {
      return response.status(422).json({ message: 'Erreur lors de la création du film.' })
    }
  }

  async show({ params, response }) {
    const film = await Film.find(params.id)

    if (film) {
      return response.status(200).json(film)
    } else {
      return response.status(404).json({ message: 'Film non trouvé.' })
    }
  }

  async update({ params, request, response }) {
    const film = await Film.find(params.id)

    if (film) {
      try {
        const data = request.only(['nom', 'description', 'date_parution', 'note'])
        film.merge(data)
        await film.save()
        return response.status(200).json(film)
      } catch (error) {
        return response.status(422).json({ message: 'Erreur lors de la mise à jour du film.' })
      }
    } else {
      return response.status(404).json({ message: 'Film non trouvé.' })
    }
  }

  async destroy({ params, response }) {
    const film = await Film.find(params.id)

    if (film) {
      await film.delete()
      return response.status(200).json({ message: 'Film supprimé avec succès.' })
    } else {
      return response.status(404).json({ message: 'Film non trouvé.' })
    }
  }
}

module.exports = FilmController
