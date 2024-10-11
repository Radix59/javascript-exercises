const getTheTitles = function (bookArray)
{
    return bookArray.map((item) =>
    {
        return item.title;
    });
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

let booktitles = getTheTitles(books);
console.log(books);

// Do not edit below this line
module.exports = getTheTitles;
