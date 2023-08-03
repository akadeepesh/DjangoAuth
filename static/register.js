function validatePassword() {
    // Get the password field
    var passwordField = document.querySelector("input[type='password']");
    var password = passwordField.value;

    // Reset the custom validity message
    passwordField.setCustomValidity("");

    // Check if password is too similar to other personal information
    if (passwordIsTooSimilar(password)) {
        passwordField.setCustomValidity("Your password can’t be too similar to your other personal information.");
        return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        passwordField.setCustomValidity("Your password must contain at least 8 characters.");
        return false;
    }

    // Check if password is a commonly used password
    if (isCommonPassword(password)) {
        passwordField.setCustomValidity("Your password can’t be a commonly used password.");
        return false;
    }

    // Check if password is entirely numeric
    if (/^\d+$/.test(password)) {
        passwordField.setCustomValidity("Your password can’t be entirely numeric.");
        return false;
    }

    return true;
}