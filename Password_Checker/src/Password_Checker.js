function password_is_valid(Password) {
  try {
    if (Password == "") throw ` exist`;
    if (Password.length < 8) throw `$ atleast have 8 characters`;
    if (Password.match(/[a-z]/g) == null) throw ` have one lower character`;
    if (Password.match(/[A-Z]/g) == null) throw ` have uppercase letters`;
    if (Password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw `have atleast one special character`;
    if (Password.match(/[0-9]/g) == null) throw `have have atleast one number`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return Password;
}

console.log(password_is_valid("@Anda2000"));

/**** Password Is Okay ****/

function password_is_Okay(Password) {
  try {
    if (Password == "") throw ` exist`;
    if (Password.length < 8) throw `atleast 8 characters`;
    if (Password.match(/[a-z]/g) == null) throw ` have one lower character`;
    if (Password.match(/[A-Z]/g) == null) throw ` have uppercase letters`;
    if (Password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw ` have atleast one special character`;
    if (Password.match(/[0-9]/g) == null) throw ` have have atleast one number`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return Password;
}
console.log(password_is_Okay("@Anda2000"));

// /**** Password Is Never Okay ****/

function password_is_neverOkay(Password) {
  try {
    if (Password == "") throw ` exist`;
    if (Password.length < 8) throw ` atleast 8 characters`;
    if (Password.match(/[a-z]/g) == null) throw ` have one lower character`;
    if (Password.match(/[A-Z]/g) == null) throw `have uppercase letters`;
    if (Password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw ` have atleast one special character`;
    if (Password.match(/[0-9]/g) == null) throw ` have have atleast one number`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return Password;
}

console.log(password_is_neverOkay("Anda2000"));


module.exports = {
  password_is_valid,
  password_is_Okay,
  password_is_neverOkay,
};