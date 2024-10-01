const removeFromArray = function (subjectArray, ...args)
{
    if (!subjectArray.isArray())
    {
        return "ERROR";
    }
    args.forEach((arg) =>
    {
        let index = subjectArray.indexOf(arg);
        if (index > -1)
        {
            subjectArray.splice(index, 1);
        }
    })

    return subjectArray;
};

// Do not edit below this line
module.exports = removeFromArray;
