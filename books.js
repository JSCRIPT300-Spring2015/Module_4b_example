var bookList = [
	{
		_id: 0,
		title: 'Wool',
		author: 'Hugh Howey',
		genre: 'Science Fiction',
		read: false
	},
	{
		_id: 1,
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		genre: 'Fiction',
		read: false
	},
	{
		_id: 2,
		title: 'Dune',
		author: 'Frank Herbert',
		genre: 'Science Fiction',
		read: false
	},
	{
		_id: 3,
		title: 'The Fall of the Ottomans',
		author: 'Eugene Rogan',
		genre: 'History',
		read: false
	},
	{
		_id: 4,
		title: 'Empire Falls',
		author: 'Richard Russo',
		genre: 'Fiction',
		read: false
	},
	{
		_id: 5,
		title: 'Shift',
		author: 'Hugh Howey',
		genre: 'Science Fiction',
		read: false
	},
	{
		_id: 6,
		title: 'Truman',
		author: 'David McCullough',
		genre: 'History',
		read: false
	},
	{
		_id: 7,
		title: 'The Amazing Adventures of Kavalier and Klay',
		author: 'Michael Chabon',
		genre: 'Fiction',
		read: false
	},
	{
		_id: 8,
		title: 'Ulysses',
		author: 'James Joyce',
		genre: 'Fiction',
		read: false
	},
	{
		_id: 9,
		title: 'The Hobbit',
		author: 'J.R. Tolkien',
		genre: 'Fantasy',
		read: false
	}
];

var _ = require('underscore');

function getBooks() {
	return bookList;
}

function getBook(id) {
	console.log('id: ', id);
	id = parseInt(id, 10);
	return _.find(bookList, function (book) {
		console.log('book._id: ', book._id);
		return book._id === id;
	});
}

function addBook(book) {
	if (book) {
		bookList.push(book);
	}
}

function removeBook(id) {
	var id = parseInt(id, 10);
	var index = _.findIndex(bookList, function (book) {
		return book._id === id;
	});
	bookList.splice(index, 1);
}

module.exports = {
	getBooks: getBooks,
	getBook: getBook,
	addBook: addBook,
	removeBook: removeBook
};
