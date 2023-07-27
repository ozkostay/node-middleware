const express = require('express');
const router = express.Router();
const Book = require('../store/Book');

const store = {
  books: [new Book('1','','','','','','book-name.pdf'), new Book()],
};

router.get("/api/books", (req, res) => {
  const { books } = store;
  res.json(books);
});

router.post("/api/user/login", (req, res) => {
  const returnObject = { id: 1, mail: "test@mail.ru" };
  res.status(201);
  res.json(returnObject);
});

router.get("/api/books", (req, res) => {
  const { books } = store;
  res.json(books);
});

router.get("/api/books/:id", (req, res) => {
  const { books } = store;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  if (idx !== -1) {
    res.json(books[idx]);
  } else {
    res.status(404);
    res.json("404 | страница не найдена");
  }
});

router.post("/api/books/", (req, res) => {
  const { books } = store;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
  );

  books.push(newBook);
  res.status(201);
  res.json(newBook);
});

router.put("/api/books/:id", (req, res) => {
  const { books } = store;
  const { title, desc } = req.body;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  // Добавить поля
  if (idx !== -1) {
    books[idx] = {
      ...books[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    };

    res.json(books[idx]);
  } else {
    res.status(404);
    res.json("404 | страница не найдена");
  }
});

router.delete("/api/books/:id", (req, res) => {
  const { books } = store;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  if (idx !== -1) {
    books.splice(idx, 1);
    res.json(true);
  } else {
    res.status(404);
    res.json("404 | страница не найдена");
  }
});

router.get("/api/books/:id/download", (req, res) => {
  const { books } = store;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx > -1) {
    const path = `/public/books/${books[idx].fileName}`;
    // Путь к файлу найден,
    // Как запустить загрузку автоматически не пойму
    res.status(201);
    res.json(`Загружаем файл ${path}`);
  } else {
    res.status(500);
    res.json(`Нет файла с ID=${id}`);
  }
});

module.exports = router;
