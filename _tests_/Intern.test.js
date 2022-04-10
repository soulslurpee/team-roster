const Intern = require('../lib/Intern.js');
const { TestWatcher } = require('jest');

test('checks for intern title', () =>{

  const intern = new Intern('Dave', '2', 'Intern', 'dave@company.com', 'school');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe('2');
  expect(intern.title).toBe('Intern');
  expect(intern.email).toBe('dave@company.com');
  expect(intern.special).toBe('school');
});

test('creates bio array object', () => {

  const intern = new Intern('Dave', '2', 'Intern', 'dave@company.com', 'school');

  expect(intern.getBio()).toEqual(expect.any(Object));

  console.log(intern.getBio());
});