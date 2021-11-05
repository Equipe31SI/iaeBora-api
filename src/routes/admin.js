const express = require('express')
const router = express.Router()
const userController = require('../controllers/admin')
const authMiddleware = require('../middlewares/auth')

router.get("/", userController.getAdmin)
router.get("/:id", userController.getAdminById)
router.post('/register', userController.createAdmin)

router.use(authMiddleware)
router.delete("/:id", userController.deleteAdmin)

module.exports = router