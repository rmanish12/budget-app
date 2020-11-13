export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
    return password.trim().length >= 6
}

export function validateFirstName(firstName) {
    return firstName.trim().length > 0
}

export function validateConfirmPassword(password, confirmPassword) {
    return password.trim() === confirmPassword.trim()
}