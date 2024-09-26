const repeatString = function (string, numOfRepeats)
{
    if (numOfRepeats < 0)
    {
        return "ERROR";
    }
    let finalString = "";
    for (let i = 0; i < numOfRepeats; i++)
    {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
