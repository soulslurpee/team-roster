const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('Dave', '69', 'dave@company.com', 'MSU');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe('69');
  expect(intern.title).toBe('Intern');
  expect(intern.email).toBe('dave@company.com');
  expect(intern.special).toBe('MSU');
  expect(intern.icon).toBe(`<img src = "./src/graduate.png">`)
});