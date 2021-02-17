import users from './users.js';

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);

console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));