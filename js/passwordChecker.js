function isPasswordSafe(password) {
    const minLength = 8;
    const hasUpperCaseChar = /[A-Z]/.test(password);
    const hasLowerCaseChar = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength){
        console.log("min length is 8 chars.");
        return false;
    }

    if (!hasUpperCaseChar){
        console.log("password need at least an upper case char.");
        return false;
    }

    if (!hasLowerCaseChar){
        console.log("password need at least one lower case char.");
        return false;
    }

    if(!hasDigit){
        console.log("password need at least one digit.");
        return false;
    }

    if(!hasSpecialChar){
        console.log("password need at least one special char -> !@#$%^&*(),.?\":{}|<>\\/");
        return false;
    }

    console.log("Strong choice buddy!");
    
    return true;
}
