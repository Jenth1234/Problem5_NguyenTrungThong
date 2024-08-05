const userService = require("../services/user/userService");

class UserController {

  registerUser = async (req, res) => {
    try {
      const payload = req.body;
      await userService.registerUser(payload);
      return res.status(201).json({ message: "Registration successful" });
    } catch (err) {
      return res.status(500).json({ errors: { general: "User registration failed" } });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const updatedUser = await userService.updateUserById(id, payload);
      if (updatedUser) {
        return res.status(200).json({ message: "Update successful"});
      } 
    } catch (error) {
      return res.status(500).json({ errors: { general: "User update failed: " + error.message } });
    }
  };

  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserInfo(id);
      if (user) {
        return res.status(200).json({ data: user });
      } 
    } catch (err) {
      return res.status(500).json({ errors: { general: "Failed to retrieve user information" } });
    }
  };
  listGender = async (req, res) => {
    try {
      const gender = req.query.gender;
      if (!gender) {
        return res.status(400).json({ errors: { general: "Gender is required" } });
      }
      const users = await userService.listUsersByGender(gender);
      return res.status(200).json({ data: users });
    } catch (err) {
      return res.status(500).json({ errors: { general: "Failed to retrieve user list" } });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params; 
      const deletedUser = await userService.deleteUserById(id);
      if (deletedUser) {
        return res.status(200).json({ message: "User deletion successful", data: deletedUser });
      } else {
        return res.status(404).json({ errors: { general: "User not found" } });
      }
    } catch (err) {
      return res.status(500).json({ errors: { general: "User deletion failed" } });
    }
  };
}


module.exports = new UserController();
