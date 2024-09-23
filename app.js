// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/books');

dotenv.config(); // Загружаем переменные окружения из .env

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к базе данных MongoDB
mongoose.connect(process.env.DATABASE_URL)
	.then(() => console.log('Успешно подключено к базе данных MongoDB'))
	.catch((err) => console.error('Ошибка подключения к базе данных MongoDB:', err));

// Использование маршрутов с префиксом '/api'
app.use('/api/books', booksRoutes);

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});
