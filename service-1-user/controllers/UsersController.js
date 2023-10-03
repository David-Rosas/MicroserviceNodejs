const User = require("../models/User");
const bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports= {
    async RegisterUser(data, res) {

        let checkUserData = await User.findOne({ where: { email: data.body.email } });
    
        if (checkUserData !== null) {
          res.status(400).send({
            "errors": [
              {
                "type": "field",
                "value": "",
                "msg": "The email address is already registered.",
                "path": "email",
                "location": "body"
              },]
          });
        } else {
          //encriptacion de contraseña
          const passwordHast = await bcryptjs.hash(data.body.password, 10);
          User.create({
            name: data.body.name,
            email: data.body.email,
            password: passwordHast,
          }).then((user) => res.status(201).send({
            id: user.id,
            firstName: user.firstName,
            email: user.email,
          })).catch((error) => {
            console.log(error);
            res.status(400).send(error);
          });
        }
      },  
}