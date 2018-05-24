const mongoose = require('mongoose');

const Employee = require('./Employee');

beforeAll(() => {
    // Create some seed data
    const users = []
    for (let i = 0; i < 5; i++) {
      users.push({ username: userName(), password: password() })
    }
  
    // Get a mongoose connection and create some users
    return mongoose.connect('mongodb://localhost/testingdb')
      .then(() => User.insertMany(users))
  })
  
  afterAll(() => {
    // Get rid of our users and disconnect from mongo
    return User.remove()  
      .then(() => mongoose.disconnect())
  })

describe('Create Employee Name', () => {
    it('Should add the employee name to the database when entered', () => {
        expect(Employee.createEmployee('jonathan')).toEqual('jontathan');
    })
})

describe('Remove Employee Name', () => {
    it('Should remove the employee name from the database if already exists' , () => {
        expect(Employee.removeEmployee('jonathan')).toEqual(null);
    })
})
