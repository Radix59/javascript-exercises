const palindromes = function (testWord)
{
    testWord = testWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    testWord = testWord.replaceAll(" ", "");
    let testArray = [...testWord];
    let isPalindrome = true;
    for (let i = 0; i <= testArray.length / 2; i++)
    {
        if (testArray.at(i).toLowerCase() != testArray.at(-(i + 1)).toLowerCase())
            isPalindrome = false;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
