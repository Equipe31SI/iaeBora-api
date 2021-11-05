const mongoose = require('mongoose')
const Event = require('../models/Event')

exports.getEvent = (req, res, next) => {
  Event.find().sort({ name: 1 })
    .then((event) => {
      res.status(200).json(event)
    })
    .catch((err) => next(err))
}

exports.getEventByTitle = (req, res) => {
  const { title } = req.query
  Event.find({ title: title }).sort({ date: 1 }).then((event) => {
      res.status(200).json(event)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

exports.getEventById = (req, res, next) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: `O ID especificado não é válido.` })
    return
  }

  Event.findById(id)
    .then((event) => {
      res.status(200).json(event)
    })
    .catch((err) => next(err))
}

exports.registerEvent = async (req, res, next) => {
  const { title, date, description, hour, local, price } = req.body

  Event.findOne({ $and: [{ title: title }, { date: date }, { description: description }, 
    { hour: hour }, { local: local }, { price: price }] })
    .then(async (existingEvent) => {
      if (existingEvent) {
        return res.status(400).json({
          error: ["Já existe esse evento cadastrado."]
        })
      }

      const newEvent = new Event({
        title,
        date,
        description,
        hour,
        local,
        price
      })

      newEvent
        .save()
        .then((event) => {
          res.status(201).json(event)
        })
        .catch((err) => next(err))
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

exports.deleteEvent = (req, res) => {
  const { id } = req.params

  Event.findByIdAndDelete(id).then(() => {
      res.status(200).json({ message: `Evento deletado com sucesso.` })
    })
    .catch((err) => {
      throw new Error(err)
    })
}
