Story

As a: hr rep I want to be able to add and remove new employee names to the database

Scenarios

given: a new employee name

when: the hr rep enters the new employee name
    and: the employee name is not yet in the database
then: add employee name to the database
    and: give a message of employee successfully added

when: the hr rep enters the employee name 
    and: the employee name is already there.
then: allow the hr rep the posibilitiy of deleteing the employee
    and return an employee succesfully deleted message
