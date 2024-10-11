const add = function (a, b)
{
  return a + b;
};

const subtract = function (a, b)
{
  return a - b;
};

const sum = function (sumArray)
{
  return sumArray.reduce((sum, item) =>
  {
    return sum + item;
  }, 0);
};

const multiply = function (multArray)
{
  return multArray.reduce((mult, item) =>
  {
    return mult * item;
  }, 1);
};

const power = function (a, b)
{
  return a ** b;
};

const factorial = function (a)
{
  let factorial = 1;
  if (a > 0)
  {
    for (let i = 0; i < a; i++)
    {
      factorial *= (a - i);
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
