const reverseString = function (inputString)
{
    if (inputString.length <= 0)
    {
        return "";
    }
    let stringArray = [];
    do
    {
        stringArray.push(inputString.at(0));
        inputString = inputString.slice(1);
    } while (inputString.length > 0)

    let finalString = "";
    stringArray.forEach((character) =>
    { finalString = character + finalString; });

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
