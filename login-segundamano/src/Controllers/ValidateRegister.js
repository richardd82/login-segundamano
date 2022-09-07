export function validate(input) {
    let errors = {};
    if (!input.username) {
        errors.username = "Username is required";
    } else if (
        !/^([a-z0-9_.-]+)@([\da-z.]+)\.([a-z.]{2,6})$/.test(input.username)
    ) {
        errors.username = "Username is invalid";
    }

    if (!input.password) {
        errors.password = "Password is required";
    } else if (!/(?=.*[A-Z])^(?=.*[0-9]).{8,16}$/.test(input.password)) {
        errors.password = "Password is invalid";
    }
    console.log(input.password2 + '=========>' + input.password)
    if (input.password !== input.password2) {
        errors.match = "Passwords don't match";
    }
    return errors;
}