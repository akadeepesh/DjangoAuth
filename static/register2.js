function passwordIsTooSimilar(password) {
    var username = document.querySelector("input[type='text']");
    var nameValue = username.value;
    // Define a list of personal information to compare the password against
    var personalInfo = [nameValue];
    
    // Check if the password is too similar to any of the personal information
    for (var i = 0; i < personalInfo.length; i++) {
        if (password.includes(personalInfo[i])) {
            return true;
        }
    }
    
    // If the password is not too similar to any of the personal information, return false
    return false;
}

function isCommonPassword(password) {
    // Define a list of common passwords
    var commonPasswords = ['123456', 'password', '123456789', '12345678', '12345','qwerty', '123123', 'admin', 'letmein', 'welcome', 'abc123','passw0rd', 'football', 'iloveyou', '1234567', 'sunshine'];
    
    // Check if the password is in the list of common passwords
    if (commonPasswords.includes(password)) {
        return true;
    }
    
    // If the password is not in the list of common passwords, return false
    return false;
}

function isNotValidUsername(username) {
    // Regular expression to match letters, digits, @, /, ., +, -, or _
    // const pattern = /^[A-Za-z0-9@\/.+_\-]+$/;
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '#', '$', '%', '^', '&', '*', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let passok = false;
    for (let i = 0; i < username.length; i++) {
        if (username[i] in arr) {
            // console.log("horra bhai")
            passok = true;
        }
        else{
            // console.log("nhi horra bhai")
            passok = false;
            break;
        }
    }
    return passok;
    // Test if the username matches the pattern
}

function validatePassword() {
    // console.log("validatepass");
    var username = document.querySelector("input[type='text']");
    var nameValue = username.value;
    
    // Get the password field
    var passwordField = document.querySelector("input[type='password']");
    var password = passwordField.value;

    // Reset the custom validity message
    passwordField.setCustomValidity("");

    // Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
    if(nameValue.length>150 || isNotValidUsername(nameValue)){
        username.setCustomValidity("Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.");
        // console.log("ho gya pancho");
        return false;
    }

    // Check if password is too similar to other personal information
    if (passwordIsTooSimilar(password)) {
        passwordField.setCustomValidity("Your password can’t be too similar to your other personal information.");
        // console.log("ho gya pancho1");
        return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        passwordField.setCustomValidity("Your password must contain at least 8 characters.");
        // console.log("ho gya pancho2");
        return false;
    }

    // Check if password is a commonly used password
    if (isCommonPassword(password)) {
        passwordField.setCustomValidity("Your password can’t be a commonly used password.");
        // console.log("ho gya pancho3");
        return false;
    }

    // Check if password is entirely numeric
    if (/^\d+$/.test(password)) {
        passwordField.setCustomValidity("Your password can’t be entirely numeric.");
        // console.log("ho gya pancho4");
        return false;
    }
    // console.log("theek hai");
    return true;
}