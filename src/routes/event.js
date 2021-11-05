const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event')
const authMiddleware = require('../middlewares/auth')

router.get('/', eventController.getEvent)

router.get('/title', eventController.getEventByTitle)

router.get('/:id', eventController.getEventById)

router.use(authMiddleware)
router.post('/register', eventController.registerEvent)
router.delete('/:id', eventController.deleteEvent)

module.exports = router