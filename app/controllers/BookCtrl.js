"use strict";
console.log("BookCtrl is working");
app.controller("BookCtrl", function($scope, BookFactory){

	BookFactory.getBooks()
	.then(function(bookCollection){
        $scope.guides = bookCollection;
        console.log("guides", $scope.guides);
     });
});