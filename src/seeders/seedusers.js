const {users} = require ("./usersdata.mjs");
 const User = require ("../models/user.model");


const populateUsers = async () => {

  try {
    for (let user of users) {
      await User.create(user)
    }
  }
  catch (err) {
    console.log(err);
  }
}

populateUsers();