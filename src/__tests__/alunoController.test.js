/* eslint-disable no-multiple-empty-lines */
import request from 'supertest'
import app from '../app'
import { describe, expect, it } from '@jest/globals'
// import { insertAluno } from '../services/alunoService'
import faker from 'faker-br'

const newAluno = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  cpf: faker.br.cpf(),
  ra: faker.random.number()
}

describe('Aluno Controller tests', () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwibmFtZSI6InRlc3QiLCJpYXQiOjE2NjQ0Nzg5MTB9.Q8jeZ3wahrvy5-4cYaPou98E5sdInvhCbvnVJL0Pi4c'

  const factoryMockAluno = newAluno

  // beforeAll(async () => {
  //   await insertAluno(factoryMockAluno)
  // })

  it('should GET all alunos', async () => {
    const response = await request(app)
      .get('/v1/retrieve')
      .set('authorization', token)

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.any(Array))
    expect(response.body.length).toBeGreaterThan(0)
  })


  it('should CREATE an aluno', async () => {
    const response = await request(app)
      .post('/v1/create')
      .send({ name: factoryMockAluno.name, email: factoryMockAluno.email, cpf: factoryMockAluno.cpf, ra: factoryMockAluno.ra })
      .set('authorization', token)

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual(expect.objectContaining({ message: 'Aluno has been created.' }))
  })


  it('should UPDATE an aluno registration', async () => {
    const response = await request(app)
      .patch('/v1/edit')
      .send({ name: factoryMockAluno.name, email: factoryMockAluno.email, ra: factoryMockAluno.ra })
      .set('authorization', token)

    expect(response.status).toBe(200)
    expect(response.text).toEqual('Aluno has been edited.')
  })


  it('should DELETE an aluno registration', async () => {
    const response = await request(app)
      .delete('/v1/delete')
      .query({ ra: factoryMockAluno.ra })
      .set('authorization', token)

    expect(response.status).toBe(200)
    expect(response.text).toMatch(/deleted./)
  })


  it('should NOT PATCH an aluno registration with wrong token', async () => {
    const response = await request(app)
      .patch('/v1/edit')
      .send({ name: factoryMockAluno.name, email: factoryMockAluno.email, ra: factoryMockAluno.ra })
      .set('authorization', 'iqqwd')

    expect(response.status).toBe(401)
    expect(response.body).toEqual(expect.objectContaining({ message: 'jwt malformed' }))
    expect(response.body).toEqual(expect.objectContaining({ name: 'JsonWebTokenError' }))
  })


  it('should NOT GET all alunos without token', async () => {
    const response = await request(app)
      .get('/v1/retrieve')

    expect(response.status).toBe(401)
    expect(response.body).toEqual(expect.objectContaining({ message: 'Invalid token!' }))
  })
})
