// controllers/booksController.js
const Book = require('../models/book');

// Получение первых 20 книг из базы данных
exports.getBooks = async (req, res) => {
	try {
		const books = await Book.find().limit(20); // Получаем первые 20 книг
		res.json(books); // Отправляем книги в формате JSON
	} catch (error) {
		res.status(500).json({ message: 'Ошибка при получении книг', error });
	}
};
