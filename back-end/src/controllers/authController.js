import { insertUser, findUserByEmail } from '../services/authService'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import configs from '../configs'
const JWT_TOKEN = configs.TOKEN

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const userExists = await findUserByEmail({ email })

    if (userExists) throw new Error('User already exists!')

    const passwordHash = await bcrypt.hash(password, 8)

    await insertUser({ name, email, passwordHash })
    res.status(201).send({ message: 'User created.' })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const userExists = await findUserByEmail({ email })

    if (!userExists) throw new Error('User not found.')

    const passwordCompare = await bcrypt.compare(password, userExists[0].password)

    if (!passwordCompare) throw new Error('Password incorrect')

    const token = jwt.sign({ email, name: userExists[0].name }, JWT_TOKEN)

    res.status(200).send({ token })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

export {
  register,
  login
}
