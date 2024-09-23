// models/book.js
const mongoose = require('mongoose');

// Определение схемы книги
const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	isbn: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	emotions: [String]
});

// Экспорт модели книги
module.exports = mongoose.model('Book', bookSchema);
