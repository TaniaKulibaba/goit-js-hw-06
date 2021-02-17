import users from './users.js';

const getUserNames = users => users.map(({ name }) => name);
    
console.log(getUserNames(users));