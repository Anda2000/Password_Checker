let MyTest = require ("../src/Password_Checker");

let MyTest = MyTest.password_is_valid;
let MyTest = MyTest.Password_is_Okay;
let MyTest = MyTest.Password_is_neverOkay;

describe("funtion password_is_valid" , function(){
    it("should give results password checker" ,function(){
        expect(results).toBe("password is valid!(@Anda2000)!")
    });
    
});

describe("funtion Password_is_Okay" , function(){
    it("should give results password checker" ,function(){
        expect(results).toBe("PasswordIsOkay!(@Anda2000)!")
    });
    
});

describe("funtion Password_is_neverOkay" , function(){
    it("should give results password checker" ,function(){
        expect(results).toBe("PasswordIsNeverOkay!(Anda2000)")
    });
    
});