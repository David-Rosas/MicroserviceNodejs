const Router = require("express").Router;
const config = require("../config/config");
const axios = require("axios");
const router = Router();

router.post("/api/user/register", async (req, res) => {

  const url = `http://localhost:${config.PORT_USER}/api/user/register`;
  
  try {

    const response = await axios.post(url, req.body);

    return res.status(response.status).json(response.data);
  } catch (error) {

    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      return res.status(500).json({ error: "Error interno del servidor" });
    }

  }
});

module.exports = router;
