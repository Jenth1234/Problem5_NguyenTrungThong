const userModel = require('../../models/user/userModel');
class UserService {
  async registerUser(payload) {
    try {
      const newUser = new userModel({
        USERNAME: payload.USERNAME,
        PASSWORD: payload.PASSWORD,
        FULLNAME: payload.FULLNAME,
        EMAIL: payload.EMAIL,
        ROLE: {
          IS_ADMIN: false,
        },
        GENDER: payload.GENDER,
      
      });

      const result = await newUser.save();

      return result._doc;
    } catch (error) {
      throw new Error('Registration failed: ' + error.message);

    }
  }



  async getUserInfo(user_id) {
    const user = await userModel.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async listUsersByGender(gender) {
    try {
      return await userModel.find({ GENDER: gender });
    } catch (error) {
      throw new Error('Error retrieving users by gender: ' + error.message);
    }
  }
  async deleteUserById(userId) {
    try {
      return await userModel.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);

    }
  }
  async updateUserById(userId, updates) {
    try {
      return await userModel.findByIdAndUpdate(userId, updates, { new: true });
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message);

    }
  }



}

module.exports = new UserService();
