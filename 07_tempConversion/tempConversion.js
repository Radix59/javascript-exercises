const convertToCelsius = function (tempInFar)
{
  let solution = (tempInFar - 32) * (5 / 9);
  if (!Number.isInteger(solution))
    solution = parseFloat(solution.toFixed(1));
  return solution;
};

const convertToFahrenheit = function (tempInCel)
{
  let solution = (tempInCel * (9 / 5) + 32);
  if (!Number.isInteger(solution))
    solution = parseFloat(solution.toFixed(1));
  return solution;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
