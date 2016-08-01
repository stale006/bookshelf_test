function book_shelf(max_limit) {
  // set max book to 100 if not specified
  var max_limit = max_limit || 100,
    shelves = [];

  // Create shelf method
  // Based on parameter passed as an array it shall Create one or many shelves.
  // Limit property is made an object with freeze by which the value cannot be changed.
  this.create = function(s) {
    var j = shelves.length;
    for (var i in s) {
      var shelf = {};
      shelf.index = j;
      shelf.limit = { max : s[i] };
      shelf.books = [];
      Object.freeze(shelf.limit);
      shelves.push (shelf);
      j++;
    }
  };
  // Return limit for ith shelf
  this.getLimitForShelf = function(i){
    if( !!shelves[i]) {
        return shelves[i].limit.max;
    } else {
      return "Cannot get limit for shelf " + i;
    }
  };
  this.books = {
    // object to store all books
    list : [],
    // method to test whether valid shelf is selected
    valid : function(i) {
      return (!!shelves[i]);
    },
    // Method to get all books as array of objects
    all : function(i) {
      if(this.valid(i)) {
        return shelves[i].books;
      } else {
        return "Cannot find book for shelf " + i;
      }
    },
    // Method to get size of books present in shelf
    size : function(i) {
      if(this.valid(i)) {
        return shelves[i].books.length;
      } else {
        return "Cannot find book for shelf " + i;
      }
    },
    // Method to determine number of books that can be added
    canBeAdded : function(i) {
      if(this.valid(i)) {
        return (shelves[i].limit.max - shelves[i].books.length);
      } else {
        return "Cannot find book limit for shelf" + i;
      }
    },
    // Method to create a book
    //If shelf id is present the book object values are freezed
    create : function(title,author,isbn,shelf_id) {
      var b = {};
      b.title = title;
      b.author = author;
      b.isbn = isbn;
      b.id = this.list.length;
      this.list.push(b);
      if(this.valid(shelf_id)) {
        shelves[shelf_id].books.push(b);
        Object.freeze(b);
      }
    },
    // Method to create multiple book which accepts array of objects
    multipleCreate : function(s){
      for (var i in s) {
        this.create(s[i].title, s[i].author, s[i].isbn, s[i].shelf_id);
      }
    },
    // Method to remove a book from shelf
    remove : function(book_id, shelf_id) {
      if( this.valid(shelf_id) && !!shelves[shelf_id].books[book_id] ) {
          shelves[shelf_id].books.splice(book_id,1);
      }
    },
    //Method to search for books in shelves
    search : function(text) {
      var result = [];
      for (var i = 0; i < shelves.length; i++) {
        for (var j = 0; j < shelves[i].books.length; j++) {
          if( shelves[i].books[j].title == text || shelves[i].books[j].author == text || shelves[i].books[j].isbn == text ) {
              result.push( { shelf: i, book: shelves[i].books[j] } );
          }
        }
      }
      return result;
    }
  };

  // To test and debug the result
  this.stats = function(){
    return shelves;
  };
}
