const service = require("../services/usersService");

async function getAllUsers(req, res) {
  const response = await service.getAllUsers();
  res.json(response);
}

module.exports = {
  getAllUsers,
};
