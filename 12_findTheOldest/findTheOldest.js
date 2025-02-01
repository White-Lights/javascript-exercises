const findTheOldest = function(people) {
    people.forEach((person) => {
        if(person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
    })
    people.sort(compare);
    return people[0];
};

function compare(a, b) {
    if (a.age < b.age) return 1; // if the first value is less than the second
    if (a.age == b.age) return 0; // if values are equal
    if (a.age > b.age) return -1; // if the first value is greater than the second
  }

// Do not edit below this line
module.exports = findTheOldest;
