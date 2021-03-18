import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rick Morty',
    email: 'rick_morty@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Luc Piccard',
    email: 'luc_piccard@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
