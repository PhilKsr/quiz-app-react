import User from "../models/user.model.js";

const getUser = async (req, res) => {
  const email = req.query.email;
  const result = await User.findOne({ email: `${email}` });
  res.json(result);
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login success", user: user });
      } else {
        res.send({ message: "Wrong credentials" });
      }
    } else {
      res.send("Not registered");
    }
  });
};

const postRegister = async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfull" });
        }
      });
    }
  });
};

export { getUser, postLogin, postRegister };
