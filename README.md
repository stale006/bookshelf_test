#Bookshelf

Write a javascript module called "Bookshelf" that can be used to store a maximum of n books. It should provide methods to perform/ask the following:

To start off we run

var a = new book_shelf( n );  where n is maximum number of books that can stored in Bookshelf.

1. Create one or multiple shelves with a configurable limit for books

  a.create([15,25]); -> This is a way to create to one or multiple shelves just by passing array of configurable limit for book.
  I have not implemented validation to check when configurable limit for book exceeds maxmum books.
  
2. What is the limit for books for a shelf
  
  a.books.getLimitForShelf(i);  -> i being the index of shelf. 

3. Make sure the limit cannot be changed

  Object.freeze property is used to make limit object immutable.
  
4. how many books are on the shelf
  
  a.books.size(i): -> i being the index of shelf
  
5. how many books can be added

  a.books.canBeAdded(i) -> i being the index of shelf.

6. get the list of books on the shelf

  a.books.all(i); -> i being the index of shelf.

8. add a new book (parameters: title, author, ISBN)

  a.books.create( "Harry Potter","J.K Rowling","23876823", 0); 

9. Add multiple books

  a.books.multipleCreate([{ title: "Lord of the rings", author : "J.R.R Tolkien", isbn : "8789472983", shelf_id : 1 }, 
  { title: "Game of Thrones", author : "George R.R Martin", isbn : "234344", shelf_id : 1 } ]);

10. remove a book
  
  a.books.remove( 0, 0 ); -> First paramter is book id and second one is shelf id 

11. make sure that book parameters cannot be changed once the book has been put on the shelf
  
  Object.freeze property used on book object while creating a book with shelf number

12. search a book by either of three parameters (partial search)
  
  a.books.search("Harry"); -> Paramter text is used to search in every shelf. The search only looks for exact string match.
