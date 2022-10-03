import jwt from 'jsonwebtoken'
import configs from '../configs'
const JWT_TOKEN = configs.TOKEN

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return res.status(401).send({ message: 'Invalid token!' })

  jwt.verify(token, JWT_TOKEN, (err, name) => {
    if (err) return res.status(401).send(err)

    req.name = name
    next()
  })
}

export default isAuthenticated
