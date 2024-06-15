// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import registerRoutes from "./routes/registerRoutes.js";
// import loginRoutes from "./routes/loginRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import logoutRoutes from "./routes/logoutRoutes.js";
// import logger from "./middleware/logger.js";
// import cookieParser from 'cookie-parser';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(express.json());
// app.use(cookieParser());
// app.use(logger);

// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// app.use(registerRoutes);
// app.use(loginRoutes);
// app.use(blogRoutes);
// app.use(logoutRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import env from "dotenv";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from "path";
import cors from 'cors';
const __dirname=dirname(fileURLToPath(import.meta.url));

env.config();


const db = new pg.Client({
  user:process.env.PG_USER, 
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const app = express();
const saltRounds = 10;
const port =3000;
db.connect();
app.use(cors());


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get("/opps",(req,res)=>{
  
});

app.get("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email+password)

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const cid=user.id;
      const storedPassword = user.password;
       if(storedPassword==password){
        res.json(cid).status(200);
       }
       else {
        res.send("Incorrect Password").status(400);
      }
      
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const type=req.body.type;
  const username=req.body.username;

  try {
    const checkResult = await db.query("SELECT * FROM usertable WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.").status(400);
    } else {
      // bcrypt.hash(password,saltRounds,async (err,hash)=>{
      //   if(err){
      //     console.log("Error :"+err);
      //   }
      //   else{
          const result = await db.query(
        "INSERT INTO usertable (username, password, type, email) VALUES ($1, $2, $3, $4)",[username, password, type, email]);
        const Id = await db.query("SELECT * FROM usertable WHERE email = $1", [email]);
        const curId=Id.id;
        await db.query(`INSERT INTO student (id, courseId, mentor) VALUES(2, 'Summer Internship at XYZ Tech', 'Engineering');`);
        res.json("Data added");
         console.log(result);
    
      }
  } catch (err) {
    console.log(err);
  }
});

app.get("/student/:id",async (req,res)=>{
  console.log(req.body);
  const ids=parseInt(req.params.id);
  const data = await db.query(`SELECT  student.id AS student_id,  student.name AS student_name,  student.mentor_id,  student.mentor_name,  student.mentor_phone,  student.attendance,  student.quiz_no AS student_quiz_no, student.course_name, student.phase,  student.course_id AS student_course_id,   users.username,   users.type,  users.email FROM  student JOIN  users ON student.id = users.id WHERE  student.id = ${ids};`);
  const userdata=data.rows;
  res.json(userdata);
  
});

app.get("/courses",async(req,res)=>{
  const data= await db.query("Select * from courses");
  res.json(data.rows);
});

app.get("/scholorships",async(req,res)=>{
  console.log("hi");
  const data= await db.query("Select * from scholarship");
  res.json(data.rows);
});

// app.get('*', (req, res) => {
//   // res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
//   res.send("hello");
// });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
