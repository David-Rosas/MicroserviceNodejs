require("dotenv").config();

const morgan = require("morgan");
const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4000;
const router = express.Router();

const UserRouter = require("./shared/routes/user.routes")


// middlewares ===========================================
app.use(
  cors({
    // Sets Access-Control-Allow-Origin to the UI URI
    origin: process.env.URL_FRONTEND,
    // Sets Access-Control-Allow-Credentials to true
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =======================================================

// Rutas ==================================================

const routerInit = router.get("/", function (req, res, next) {
  res.send("Backend microservices");
  res.end();
});

app.use(cookieParser());
app.use(routerInit);
app.use(UserRouter);

// ========================================================

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
