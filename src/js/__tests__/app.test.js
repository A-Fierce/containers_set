import Team from '../app';

const bower = { name: 'Bowerman', className: 'bower' };
const daemons = { name: 'Daemon', className: 'daemons' };
const zombies = { name: 'Zombie', className: 'zombies' };

test('add character', () => {
  const myTeam = new Team();
  myTeam.add(zombies);
  const recieved = myTeam.members.has(zombies);
  expect(recieved).toBe(true);
});

test('add the same character', () => {
  expect(() => {
    const myTeam = new Team();
    myTeam.add(bower);
    myTeam.add(bower);
  }).toThrow('Ошибка');
});

test('add characters to the team', () => {
  const myTeam = new Team();
  myTeam.addAll(bower, daemons, zombies, bower, daemons, zombies);
  const recieved = myTeam.members.size;
  expect(recieved).toBe(3);
});

test('convert to array', () => {
  const myTeam = new Team();
  myTeam.addAll(bower, daemons);
  const recieved = myTeam.toArray();
  const expected = [
    { name: 'Bowerman', className: 'bower' },
    { name: 'Daemon', className: 'daemons' },
  ];

  expect(recieved).toEqual(expected);
});
