import users from './users.js';

const getUserWithEmail = (users, mail) => users.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));