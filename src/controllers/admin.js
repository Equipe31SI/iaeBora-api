const Admin = require('../models/Admin')
const { signupAdminSchema } = require('../validators/admin')
const bcrypt = require('bcrypt')
const bcryptSalt = 8

exports.createAdmin = async (req, res, next) => {
  const { password } = req.body
  const salt = bcrypt.genSaltSync(bcryptSalt)
  
  try {
    const validatedBody = await signupAdminSchema.validate(req.body)

    const admin = new Admin(validatedBody)

    Admin.findOne({ email: validatedBody.email }).then(async (existingAdmin) => {
      if (existingAdmin) {
        return res.status(400).json({
          error: ["Já existe uma conta com esse e-mail"],
        })
      }

      const passwordHashed = await bcrypt.hashSync(password, salt)
      admin.password = passwordHashed

      admin.save()
        .then(res.status(201).json({ message: `Usuário criado com sucesso.` }))
        .catch(err => next(err));
    })
    .catch((err) => {
      res.status(400).json(err)
    })
  } catch (e) {
      res.status(400).json(e)
  }
}

exports.getAdmin = (req, res, next) => {
  Admin.find()
    .then((admin) => {
      res.status(200).json(admin)
    })
    .catch((err) => next(err))
}

exports.getAdminById = (req, res, next) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: `O ID especificado não é válido.` })
    return
  }

  Admin.findById(id)
    .then((admin) => {
      res.status(200).json(admin)
    })
    .catch((err) => next(err))
}

exports.deleteAdmin = (req, res) => {
  const { id } = req.params

  Admin.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: `Administrador deletado com sucesso.` })
    })
    .catch((err) => {
      throw new Error(err)
    })
}