const leapYears = function (yearToTest)
{
    if (yearToTest % 4 == 0 && (yearToTest % 100 != 0 || yearToTest % 400 == 0))
        return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
