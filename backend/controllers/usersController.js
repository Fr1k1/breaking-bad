const service = require("../services/usersService");

async function getAllUsers(req, res) {
  const response = await service.getAllUsers();
  res.json(response);
}

async function deleteUserById(req, res) {
  const id = req.params.id;
  const response = await service.deleteUserById(id);
  if (response == undefined) {
    res.status(500).json({ error: "Error deleting user" });
  } else {
    res.json(response);
  }
}

module.exports = {
  getAllUsers,
  deleteUserById,
};
