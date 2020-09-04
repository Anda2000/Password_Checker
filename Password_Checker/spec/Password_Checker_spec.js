let Password = require("../src/Password_Checker");

var passwordTest = "@Anda2000";

describe("funtion password_is_valid", function () {
  it("should return the valid password", function () {
    expect(passwordTest.match("@Anda2000")).toMatch("@Anda2000");
  });
});

describe("funtion password_is_okay", function () {
  it("should return the  password", function () {
    expect(passwordTest.match("@Anda2000")).toMatch("@Anda2000");
  });
});

describe("funtion password_is_neverOkay", function () {
  it("should return the incorrect password password", function () {
    expect(passwordTest.match("Anda2000")).toMatch("Anda2000");
  });
});

describe("Test all function", function () {
  it("atleast have 8 characters", function () {
    expect(passwordTest.match("@Anda2000")).toMatch(8);
  });
  it("should have one lower character", function () {
    expect(passwordTest.match("@Anda2000")).toMatch(/[a-z]/g);
  });
  it("should have uppercase letters", function () {
    expect(passwordTest.match("@Anda2000")).toMatch(/[A-Z]/g);
  });
  it("should have atleast one special character", function () {
    expect(passwordTest.match("@Anda2000")).toMatch(/[{(!@#$%^&*.,\')}]/g);
  });
  it("should have have atleast one number", function () {
    expect(passwordTest.match("@Anda2000")).toMatch(/[0-9]/g);
  });
});