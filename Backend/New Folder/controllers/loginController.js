import bcrypt from "bcrypt";
import db from "../models/db.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      const match = await bcrypt.compare(password, storedPassword);
      if (match) {
        const tableName = `blogs_${email.replace(/[^a-zA-Z0-9]/g, "")}`;
        const token = jwt.sign({ email, tableName }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(400).send("Incorrect Password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
