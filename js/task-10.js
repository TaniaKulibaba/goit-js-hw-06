import users from './users.js';

const getSortedUniqueSkills = users => users
    .reduce((acc, user) => {
        acc.push(...user.skills);
        return acc;
    }, [])
    .filter((skill, idx, arr) => arr.indexOf(skill) === idx)
    .sort();

console.log(getSortedUniqueSkills(users));