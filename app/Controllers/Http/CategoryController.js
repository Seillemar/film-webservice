'use strict'

const Category = use('App/Models/Category')

class CategoryController {
    async index({ request }) {
        const { page } = request.get()
        return await Category.query().paginate(page)
    }

    async store({ request }) {
        const data = request.only(['nom'])
        const category = await Category.create(data)
        return category
    }

    async show({ params }) {
        const category = await Category.find(params.id)
        return category
    }

    async update({ params, request }) {
        const category = await Category.find(params.id)
        const data = request.only(['nom'])
        await category.merge(data)
        await category.save()
        return category
    }

    async destroy({ params }) {
        const category = await Category.find(params.id)
        await category.delete()
    }

    async films({ params }) {
        const category = await Category.find(params.id)
        return await category.films().fetch()
    }
}

module.exports = CategoryController