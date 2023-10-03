require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("../shared/config/config")

const port = config.PORT_USER || 4002;
const router = express.Router();

//routes
const UserRoutes = require("./routes/user.routes")


// middlewares ===========================================
app.use(
  cors({
    // Sets Access-Control-Allow-Origin to the UI URI
    origin: config.URL_FRONTEND,
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
  res.send("User- Backend");
  res.end();
});

app.use(cookieParser());
app.use(routerInit);
app.use(UserRoutes);

// ========================================================

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
