const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
  const manager = new Manager('Dave', '69', 'dave@company.com', '420');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('69');
  expect(manager.title).toBe('Manager');
  expect(manager.email).toBe('dave@company.com');
  expect(manager.special).toBe('420');
  expect(manager.icon).toBe(`<img src = "./src/coffee.png">`)
});