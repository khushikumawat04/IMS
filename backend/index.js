const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const Razorpay = require("razorpay");
// require('./models/Config');
const bcrypt = require("bcryptjs");
const path = require("path");

// const jwt = require("jsonwebtoken");
const JWT = require("jsonwebtoken");
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const UserModel = require("./models/Users");
const UserModel1 = require("./models/Users1");
const { requireSignIn, isAdmin } = require("./middleware/authMiddleware");
const { hashedPassword, comparePassword } = require("./helper/authhelper");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use("/api", paymentRouter);
app.use(express.static(path.join(__dirname, "../frontend/react-crud/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/react-crud/build/index.html"));
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/meet")
  .then(() => console.log("data base is connected"))
  .catch((err) => console.log(err));
// mongoose.connect("mongodb://127.0.0.1:27017/meet01")

//schema for notice
const NoticeBoard = new mongoose.Schema({
  notice: String,
});

const NoticeModel = mongoose.model("Notice", NoticeBoard);

app.post("/notice", async (req, res) => {
  console.log(req.body); // Log the request body
  try {
    const { notice } = req.body;
    const newNotice = new NoticeModel({ notice });
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/get-notice", async (req, res) => {
  NoticeModel.find({})
    .then((Notice) => res.json(Notice))
    .catch((err) => res.json(err));
});

// Define the schema for attendance data
const attendanceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  attendanceRecords: [
    {
      studentId: {
        type: String,
        ref: "Student",
        required: true,
      },
      attendance: {
        type: String,
        enum: ["Present", "Absent"],
        required: true,
      },
      Course: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const AttendanceModel = mongoose.model("Attendance", attendanceSchema);

// Endpoint to handle POST requests for submitting attendance data
app.post("/submit-attendance", async (req, res) => {
  const { attendanceRecords, date } = req.body;
  console.log("Received data:", { attendanceRecords, date });

  try {
    const newAttendance = new AttendanceModel({
      attendanceRecords,
      date: new Date(date),
      date,
    });
    await newAttendance.save();
    res
      .status(201)
      .json({ message: "Attendance data submitted successfully." });
  } catch (error) {
    console.error("Error submitting attendance data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/get-attendence", async (req, res) => {
  AttendanceModel.find({})
    .then((Attendance) => res.json(Attendance))
    .catch((err) => res.json(err));
});

app.get("/table", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getstudents/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updatestudent/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      First: req.body.First,
      Last: req.body.Last,
      Address: req.body.Address,
      Course: req.body.Course,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deletestudent/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  let user = UserModel(req.body);
  let result = await user.save();
  res.send(result);
});

// Registration route
app.post("/register", async (req, res) => {
  try {
    const { username, email, password, UserType, phone, course, address } =
      req.body;
    // const encryptedPassword = await bcrypt.hash(password,10)

    // Basic validation
    if (!username || !email || !password || !phone || !course || !address) {
      return res.status(400).json({ message: "Please fill all fields." });
    }

    // Check if the email is already registered
    const existingUser = await UserModel1.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // const existingUserType = await UserModel1.findOne({ UserType });
    // if (existingUserType) {
    //   return res.status(400).json({ message: 'Please Enter UserType' });
    // }

    // Create a new user and save to the database
    const hashPassword = await hashedPassword(password);
    const user = new UserModel1({
      username,
      email,
      password: hashPassword,
      UserType,
      phone,
      course,
      address,
    }).save();
    // await user.save();

    res.status(201).json({
      message: "Registration successful!",
      user: {
        username: (await user).username,
        email: (await user).email,
        password: (await user).password,
        phone: (await user).phone,
        course: (await user).course,
        address: (await user).address,
        // UserType: ((await user).UserType)
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields." });
    }

    // Check if the user exists
    const user = await UserModel1.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }
    // Check the password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password." });
    }
    const token = JWT.sign({ _id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      message: "Login successful!",
      user: {
        username: user.username,
        email: user.email,
        UserType: user.UserType,
        course: user.course,
        address: user.address,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

//user profile endpoint
/* app.get('/user-profile' , (req,res) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = JWT.verify(token, secretKey);
    const Users = user.find((u) => u.id === decodedToken.userId);
     if(!Users){
      return res.status(404).json({message: 'User not Found'});
     }
     res.json({user});
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}) */

//test controller
app.use(requireSignIn, isAdmin);
app.get("/test", (req, res, requireSignIn) => {
  res.send("Protected Routes");
});

//protected route auth
app.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

app.listen(port, () => {
  console.log(`Server is Running ${port}`);
});
