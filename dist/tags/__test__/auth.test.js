// import { Auth } from "../domain";
// import { Registeruser } from "../validations/types";
// const should = require("chai").should();
// const registerUser: Registeruser = {
//   user_id: "Jal",
//   phone_no: "123123123",
//   user_name: "user name",
//   location: "http://localhost",
//   email: "jalinson@gmail.com",
//   password: "Abcd1234%",
// };
// const newEmail = `jalinson${Date.now()}}@gmail.com`;
// describe("User Module", () => {
//   it("Should return the created user", async () => {
//     const newUser = await Auth.reguser(registerUser);
//   }),
//     it("Should return a valid user", async () => {
//       const user = await Auth.findById("Jal");
//       should.exist(user);
//     }),
//     it("Should not return a valid user", async () => {
//       const user = await Auth.findById("asdasddddas@gmail.com");
//       should.not.exist(user);
//     });
//   it("Should create an user if it doesn't exist", async () => {
//     const user = await Auth.find(newEmail);
//     if (!user) {
//       const newUser = await Auth.reguser({
//         user_id: "Jal",
//         email: newEmail,
//         phone_no: "123123123",
//         location: "http://localhost",
//         user_name: "Jal",
//         password: "Abcd1234%",
//       });
//       // newUser.should.have.property("iduser");
//     } else {
//       should.not.exist(
//         user,
//         "Please be sure to change the newEmail field to a email that doesn't exist in the database"
//       );
//     }
//   });
// });
//# sourceMappingURL=auth.test.js.map