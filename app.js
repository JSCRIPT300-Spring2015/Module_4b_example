var express = require('express');
var app = express();
var books = require('./books');
var idManager = require('./idManager');
var bodyparser = require('body-parser');

idManager.setIds(books.getBooks());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/books', function (request, response) {
	response.send(books.getBooks());
});

app.get('/books/:id', function (request, response) {
	var id = request.params.id;
	var book = books.getBook(id);

	if (book) {
		response.json(book);
	} else {
		response.status(404).json('Book not found');
	}
});

app.post('/books', function (request, response) {
	var newBook = request.body;
	if (newBook) {
		newBook.read = false;
		newBook._id = idManager.getId();
		books.addBook(newBook);
		response.status(201).send(newBook);
	} else {
		response.status(400).json('problem adding book');
	}
});

app.delete('/books/:id', function (request, response) {
	var bookId = request.params.id;

	books.removeBook(bookId);
	response.sendStatus(200);
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
