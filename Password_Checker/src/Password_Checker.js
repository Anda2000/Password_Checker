function password_is_valid(password) {
  let displayNote = "password should";

  try {
    if (password == "") throw `${displayNote} exist`;
    if (password.length < 8) throw `${displayNote} atleast 8 characters`;
    if (password.match(/[a-z]/g) == null)
      throw `${displayNote} have one lower character`;
    if (password.match(/[A-Z]/g) == null)
      throw `${displayNote} have uppercase letters`;
    if (password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw `${displayNote} have atleast one special character`;
    if (password.match(/[0-9]/g) == null)
      throw `${displayNote} have have atleast one number`;

    return `password is valid!(@Anda2000)`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return password;
}

console.log(password_is_valid("@Anda2000"));

/**** Password Is Okay ****/

function Password_is_Okay(Password) {
  let displayNote = "Password should";

  try {
    if (Password == "") throw `${displayNote} exist`;
    if (Password.length < 8) throw `${displayNote} atleast 8 characters`;
    if (Password.match(/[a-z]/g) == null)
      throw `${displayNote} have one lower character`;
    if (Password.match(/[A-Z]/g) == null)
      throw `${displayNote} have uppercase letters`;
    if (Password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw `${displayNote} have atleast one special character`;
    if (Password.match(/[0-9]/g) == null)
      throw `${displayNote} have have atleast one number`;

    return `PasswordIsOkay!(@Anda2000)`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return Password;
}
console.log(Password_is_Okay("@Anda2000"));

/**** Password Is Never Okay ****/

function Password_is_neverOkay(neverOkay) {
  let displayNote = "Password should";

  try {
    if (neverOkay == "") throw `${displayNote} exist`;
    if (neverOkay.length < 8) throw `${displayNote} atleast 8 characters`;
    if (neverOkay.match(/[a-z]/g) == null)
      throw `${displayNote} have one lower character`;
    if (neverOkay.match(/[A-Z]/g) == null)
      throw `${displayNote} have uppercase letters`;
    if (neverOkay.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw `${displayNote} have atleast one special character`;
    if (neverOkay.match(/[0-9]/g) == null)
      throw `${displayNote} have have atleast one number`;

    return `PasswordIsNeverOkay!(Anda2000)`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return neverOkay;
}

console.log(Password_is_neverOkay("Anda2000"));

module.exports = {
  password_is_valid,Password_is_Okay,Password_is_neverOkay
};
