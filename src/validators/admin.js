const yup = require('yup')

yup.setLocale({
  string: {
    email: 'Esse e-mail não é válido.',
    min: 'Deve ter pelo menos ${min} caracteres.'
  }
})

exports.signupAdminSchema = yup.object().shape({
  name: yup.string().min(4).required('O campo nome é obrigatório.'),
  email: yup.string().email('Deve ser um e-mail válido').min(6).required('O campo e-mail é obrigatório.'),
  password: yup.string().min(8).required('É necessário inserir a senha.')
}).required('Esse objeto não pode ser vazio.')