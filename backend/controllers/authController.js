const service = require("../services/usersService");


async function login(req, res) {
  const {username, password} = req.body
  const response = await service.login(username, password);
  if (response.error != undefined) {
    res.status(401).json(response)
  } else {
    res.cookie("user", JSON.stringify(response.user));
    res.json(response);
  }
}

async function signup(req, res) {
  const {first_name, last_name, username, password, pin, admin} = req.body;
  const response = await service.signup(first_name, last_name, username, password, pin, admin);
  if (response.error != undefined) {
    res.status(401).json(response)
  } else {
    res.json(response);
  }
}

module.exports = {
  login,
  signup
}