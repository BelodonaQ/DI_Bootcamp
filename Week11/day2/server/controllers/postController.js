const postModel = require("../models/postModel");

function parsePostId(value) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function validatePostBody(body) {
  const { title, content } = body;

  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof content !== "string" ||
    content.trim() === ""
  ) {
    return null;
  }

  return {
    title: title.trim(),
    content: content.trim(),
  };
}

async function getAllPosts(req, res, next) {
  try {
    const posts = await postModel.getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    const id = parsePostId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "Post ID must be a positive integer",
      });
    }

    const post = await postModel.getPostById(id);

    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

async function createPost(req, res, next) {
  try {
    const postData = validatePostBody(req.body);

    if (!postData) {
      return res.status(400).json({
        error: "Title and content are required",
      });
    }

    const newPost = await postModel.createPost(postData);
    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const id = parsePostId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "Post ID must be a positive integer",
      });
    }

    const postData = validatePostBody(req.body);

    if (!postData) {
      return res.status(400).json({
        error: "Title and content are required",
      });
    }

    const updatedPost = await postModel.updatePost(id, postData);

    if (!updatedPost) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    return res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const id = parsePostId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "Post ID must be a positive integer",
      });
    }

    const deletedPost = await postModel.deletePost(id);

    if (!deletedPost) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    return res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};