const fibonacci = function (index)
{
    index = Number.parseInt(index);
    if (isNaN(index) || index < 0)
    {
        return "OOPS";
    }
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    for (let i = 0; i < index; i++)
    {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n1;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
