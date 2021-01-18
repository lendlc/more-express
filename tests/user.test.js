const request = require("supertest");
const app = require("../app");
const User = require("../models/User");

const userOne = {
  firstName: "John Lendl",
  email: "nustudent@students.national-u.edu.ph",
  password: "nationalu",
};

//runs before each test
beforeEach(async () => {
  //clear database
  await User.deleteMany();
  await User.create(userOne);
});

test("Should sign up a new user", async () => {
  //pass app to supertest
  await request(app)
    //create POST request to endpoint
    .post("/users")
    //send JSON
    .send({
      firstName: "John Lendl",
      email: "cuyuganjt@students.national-u.edu.ph",
      password: "password123",
    })
    .expect(201);
});

test("Should block user with exising email from signing up", async () => {
  await request(app).post("/users").send(userOne).expect(400);
});

