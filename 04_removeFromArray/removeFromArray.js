const removeFromArray = function (subjectArray, ...args)
{
    if (!Array.isArray(subjectArray))
    {
        return "ERROR";
    }
    args.forEach((arg) =>
    {
        let index = -1;
        do
        {
            index = subjectArray.indexOf(arg);
            if (index > -1)
            {
                subjectArray.splice(index, 1);
            }
        } while (index > -1)
    })

    return subjectArray;
};

// Do not edit below this line
module.exports = removeFromArray;
