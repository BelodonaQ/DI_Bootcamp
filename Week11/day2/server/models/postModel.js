/* | Operation | Database query |
|---|---|
| Get all | `SELECT` |
| Get one | `SELECT ... WHERE id = ?` |
| Create | `INSERT` |
| Update | `UPDATE ... WHERE id = ?` |
| Delete | `DELETE ... WHERE id = ?` | */ 

const db = require("../config/db");

async function getAllPosts() {
    return db("posts").select("*").orderBy("id", "asc");
}

async function getPostById(id) {
    return db("posts").where({ id }).first();
}

async function createPost({ title, content }) {
  const [newPost] = await db("posts")
    .insert({ title, content })
    .returning("*");

  return newPost;
}

async function updatePost(id, { title, content }) {
  const [updatedPost] = await db("posts")
    .where({ id })
    .update({ title, content })
    .returning("*");

  return updatedPost;
}

async function deletePost(id) {
  const [deletedPost] = await db("posts")
    .where({ id })
    .del()
    .returning("*");

  return deletedPost;
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};