const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('Dave', '69', 'dave@company.com', 'GittyHubber');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe('69');
  expect(engineer.title).toBe('Engineer');
  expect(engineer.email).toBe('dave@company.com');
  expect(engineer.special).toBe('GittyHubber');
  expect(engineer.icon).toBe(`<img src = "./src/glasses.png">`)
});