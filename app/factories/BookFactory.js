"use strict";
console.log("BookFactory is working");
app.factory("BookFactory", function($q, $http) {

  let getBooks = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get('./data/guides.json')
      .then((itemObject) => {
        let bookCollection = itemObject.data;
        console.log("bookCollection", bookCollection);

        resolve(bookCollection.guides);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getOneBook = () => {
    console.log("getOneBook");
  };

  // return getBooks(); //returns the promise, invoking it, which resolves it.
  return {getBooks, getOneBook};
});