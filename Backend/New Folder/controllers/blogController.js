import db from "../models/db.js";

export const getBlogs = async (req, res) => {
  const { tableName } = req.user;

  try {
    const result = await db.query(`SELECT * FROM ${tableName}`);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const createBlog = async (req, res) => {
  const { tableName } = req.user;
  const { title, content } = req.body;

  try {
    await db.query(`INSERT INTO ${tableName} (title, content) VALUES ($1, $2)`, [title, content]);
    res.send("Blog created successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const updateBlog = async (req, res) => {
  const { tableName } = req.user;
  const { id, title, content } = req.body;

  try {
    await db.query(`UPDATE ${tableName} SET title = $1, content = $2 WHERE id = $3`, [title, content, id]);
    res.send("Blog updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const deleteBlog = async (req, res) => {
  const { tableName } = req.user;
  const { id } = req.body;

  try {
    await db.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]);
    res.send("Blog deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
