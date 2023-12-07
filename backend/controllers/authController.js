const service = require("../services/usersService");


async function login(req, res) {
  const {username, password} = req.body
  const response = await service.login(username, password);
  if(response.error != undefined) {
    res.status(401).json(response)
  }
  else {
    res.json(response);
  }
}

module.exports = {
  login
}