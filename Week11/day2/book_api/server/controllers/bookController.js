const bookModel = require("../models/bookModel");

function parseBookId(value) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function validateBookBody(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return null;
  }

  const { title, author, publishedYear } = body;

  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof author !== "string" ||
    author.trim() === "" ||
    !Number.isInteger(publishedYear) ||
    publishedYear <= 0
  ) {
    return null;
  }

  return {
    title: title.trim(),
    author: author.trim(),
    publishedYear,
  };
}

async function getAllBooks(req, res, next) {
  try {
    const books = await bookModel.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

async function getBookById(req, res, next) {
  try {
    const id = parseBookId(req.params.bookId);

    if (id === null) {
      return res.status(400).json({
        error: "Book ID must be a positive integer",
      });
    }

    const book = await bookModel.getBookById(id);

    if (!book) {
      return res.status(404).json({
        error: "Book not found",
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  try {
    const bookData = validateBookBody(req.body);

    if (!bookData) {
      return res.status(400).json({
        error: "Title, author, and a valid publishedYear are required",
      });
    }

    const newBook = await bookModel.createBook(bookData);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    const id = parseBookId(req.params.bookId);

    if (id === null) {
      return res.status(400).json({
        error: "Book ID must be a positive integer",
      });
    }

    const bookData = validateBookBody(req.body);

    if (!bookData) {
      return res.status(400).json({
        error: "Title, author, and a valid publishedYear are required",
      });
    }

    const updatedBook = await bookModel.updateBook(id, bookData);

    if (!updatedBook) {
      return res.status(404).json({
        error: "Book not found",
      });
    }

    return res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const id = parseBookId(req.params.bookId);

    if (id === null) {
      return res.status(400).json({
        error: "Book ID must be a positive integer",
      });
    }

    const deletedBook = await bookModel.deleteBook(id);

    if (!deletedBook) {
      return res.status(404).json({
        error: "Book not found",
      });
    }

    return res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};