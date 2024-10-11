const findTheOldest = function (peopleArray)
{
    peopleArray.sort((person1, person2) =>
    {
        if (calculateAge(person1) > calculateAge(person2))
            return -1;
        else
            return 1
    });

    return peopleArray[0];
};

function calculateAge(person)
{
    if (isNaN(person.yearOfDeath))
    {
        return (new Date().getFullYear() - person.yearOfBirth);
    }
    else
    {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

let oldest = findTheOldest(people);
console.log(people);


// Do not edit below this line
module.exports = findTheOldest;
