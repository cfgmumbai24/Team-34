import bcrypt from "bcrypt";
import db from "../models/db.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;

export const registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      const hash = await bcrypt.hash(password, saltRounds);
      await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, hash]);

      // Create a new table for the user's blogs
      const tableName = `blogs_${email.replace(/[^a-zA-Z0-9]/g, "")}`;
      await db.query(`CREATE TABLE ${tableName} (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
      )`);

      const token = jwt.sign({ email, tableName }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
