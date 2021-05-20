const User = require("./User");
const { v4: uuidv4 } = require("uuid");

class AllUsers {
  constructor() {
    this.users = [];
  }
  addUser(name, password) {
    let randomID = uuidv4();
    let tempUser = new User(randomID, name, password);
    this.users.push(tempUser);
  }

  getAllUsers() {
    return this.users;
  }

  getUser(name, password) {
    let filteredUsersName = this.users.filter((oneUser) => {
      return oneUser.name.includes(name);
    });
    let filteredUsersPassword = filteredUsersName.filter((oU) => {
      return oU.password === password;
    });
    return filteredUsersPassword;
  }
}
module.exports = AllUsers;
