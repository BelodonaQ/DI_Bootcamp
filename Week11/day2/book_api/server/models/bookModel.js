const db = require("../config/db");

function formatBook(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    title: row.title,
    author: row.author,
    publishedYear: row.published_year,
  };
}

async function getAllBooks() {
  const rows = await db("books").select("*").orderBy("id", "asc");
  return rows.map(formatBook);
}

async function getBookById(id) {
  const row = await db("books").where({ id }).first();
  return formatBook(row);
}

async function createBook({ title, author, publishedYear }) {
  const [row] = await db("books")
    .insert({
      title,
      author,
      published_year: publishedYear,
    })
    .returning("*");

  return formatBook(row);
}

async function updateBook(id, { title, author, publishedYear }) {
  const [row] = await db("books")
    .where({ id })
    .update({
      title,
      author,
      published_year: publishedYear,
    })
    .returning("*");

  return formatBook(row);
}

async function deleteBook(id) {
  const [row] = await db("books")
    .where({ id })
    .del()
    .returning("*");

  return formatBook(row);
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};