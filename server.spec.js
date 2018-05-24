const request = require('supertest');

const server = require('./server')

beforeAll(() => {
    // Create some seed data
    const employees = []
    for (let i = 0; i < 5; i++) {
      employees.push({ name: CreateName()})
    }
  
    // Get a mongoose connection and create some users
    return mongoose.connect('mongodb://localhost/testingdb')
      .then(() => Employee.insertMany(employees))
  })
  
  afterAll(() => {
    // Get rid of our users and disconnect from mongo
    return Employee.remove()  
      .then(() => mongoose.disconnect())
  })

describe('server', () => {
    it('Should give a list of employee names', async () => {
        const response = await request(server).get('/api/createEmployee')
        expect(response.status).toBe(200)
        expect(response.type).toBe('application/json')
        expect(response.body.users).toHaveLength(5)
      })
})

