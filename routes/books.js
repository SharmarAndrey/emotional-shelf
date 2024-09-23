// routes/books.js
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');



// Маршрут GET для получения всех книг
router.get('/', booksController.getBooks);

module.exports = router;
