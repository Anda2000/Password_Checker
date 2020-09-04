let MyTest = require("../src/Password_Checker");

let password_is_valid = MyTest.password_is_valid;
let password_is_Okay = MyTest.password_is_Okay;
let password_is_neverOkay = MyTest.password_is_neverOkay;

describe("funtion password_is_valid", function () {
  it("should return the valid password", function () {
    expect(password_is_valid()).toEqual("@Anda2000");
  });
});

describe("funtion Password_is_Okay", function () {
  it("should return the okay password", function () {
    expect(password_is_Okay()).toEqual("@Anda2000)");
  });
});

describe("funtion Password_is_neverOkay", function () {
  it("should return the incorrect password", function () {
    expect(password_is_neverOkay()).toEqual("Invalid password:  have atleast one special character Anda2000");
  });
});

describe("Test all function", function () {
  it("atleast have 8 characters", function () {
    expect(Password.length()).toEqual(8);
  });
  it("should have one lower character", function () {
    expect(Password.match()).toEqual(/[a-z]/g);
  });
  it("should have uppercase letters", function () {
    expect(Password.match()).toEqual(/[A-Z]/g);
  });
  it("should have atleast one special character", function () {
    expect(Password.match()).toEqual(/[{(!@#$%^&*.,\')}]/g);
  });
  it("should have have atleast one number", function () {
    expect(Password.match()).toEqual(/[0-9]/g);
  });
});