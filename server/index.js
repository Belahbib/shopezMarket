const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const passport = require('passport');
// const session = require('express-session');
const GoogleStrategy = require("./middlewares/passport");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "https://shopez-market-xi.vercel.app",
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true,
};

// app.use(session({
//   secret: 'yourSecretKey', // Replace 'yourSecretKey' with a real secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: 'auto', maxAge: 3600000 } // secure: 'auto' will use true if site uses HTTPS
// }));

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/public", express.static("public"));
// app.use(passport.initialize());
// app.use(passport.session());


app.use("/api/", userRoutes);
app.use("/api/", productRoutes);

mongoose
  .connect(
    "mongodb+srv://achraf:9Z6VLRv69nlZZvU4@cluster-ecom.oiiyzgu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


