/* eslint-disable no-multiple-empty-lines */
import request from 'supertest'
import app from '../app'
import { describe, expect, it } from '@jest/globals'
import faker from 'faker-br'

const newUser = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
}

describe('Authentication Controller Tests', () => {
  const factoryMockUser = newUser

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/v1/auth/register')
      .send({ name: factoryMockUser.name, email: factoryMockUser.email, password: factoryMockUser.password })

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual(expect.objectContaining({ message: 'User created.' }))
    expect(response.res.statusMessage).toBe('Created')
  })


  it('should not create a new user', async () => {
    const response = await request(app)
      .post('/v1/auth/register')
      .send({ name: 'test', email: 'test@email.com', password: '123aaa' })

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(expect.objectContaining({ message: 'User already exists!' }))
  })


  it('should login with with valid credentials', async () => {
    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: factoryMockUser.email, password: factoryMockUser.password })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('token')
  })


  it('should not login with with invalid email', async () => {
    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'aaa', password: factoryMockUser.password })

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(expect.objectContaining({ message: 'User not found.' }))
  })


  it('should not login with with invalid password', async () => {
    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: factoryMockUser.email, password: 'aaa' })

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(expect.objectContaining({ message: 'Password incorrect' }))
  })
})
