const Router = require("express").Router;
const 
{
    RegisterUser,
  } = require("../controllers/UsersController");

const router = Router();

const {
signUpValidationRules,
validate
} = require("../../shared/helpers/validator")

router.post("/api/user/register", signUpValidationRules, validate, RegisterUser);

module.exports = router