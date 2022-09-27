import jwt from 'jsonwebtoken'
import configs from '../configs'
const JWT_TOKEN = configs.TOKEN

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization.split('Bearer:')[1]

  if (!token) return res.status(401).send({ message: 'Invalid token!' })

  console.log(token)

  jwt.verify(token, JWT_TOKEN, (err) => {
    if (err) return res.status(401).send(err)

    next()
  })
}

export { isAuthenticated }
