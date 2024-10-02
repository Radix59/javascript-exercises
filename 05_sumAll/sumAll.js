const sumAll = function (startInt, endInt)
{
    if (startInt < 0 || endInt < 0 || isNaN(startInt) || isNaN(endInt) || !Number.isInteger(startInt) || !Number.isInteger(endInt))
        return "ERROR";

    let sum = 0;
    if (startInt <= endInt)
    {
        for (let i = startInt; i <= endInt; i++)
        {
            sum += i;
        }
    }
    else
    {
        for (let i = endInt; i <= startInt; i++)
        {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
