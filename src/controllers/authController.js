import { insertUser, findUser } from '../services/authService'

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const response = await insertUser({ name, email, password })
    res.status(201).send(response)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const response = await findUser({ email, password })
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

export {
  register,
  login
}
