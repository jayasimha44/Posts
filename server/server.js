const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Node Server...");
});

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at port ${port}...`);
});
