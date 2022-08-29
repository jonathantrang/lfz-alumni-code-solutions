const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill'
  }
];
const secondAuthor = bookshelf[1].author;
const firstISBN = bookshelf[0].isbn;
const thirdTitle = bookshelf[2].title;

console.log('The author of the second book in the bookshelf is:', secondAuthor);
console.log('The isbn of the first book in the bookshelf is:', firstISBN);
console.log('The title of the third book in the bookshelf is:', thirdTitle);
