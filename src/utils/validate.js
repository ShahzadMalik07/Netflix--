export const checkvaliddata = (Email, Password, name, isSignIn) => {
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)
    const isPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(Password)

    if (!isSignIn && name.length < 5) return "Atlest 5 character"
    if (!isEmail) return "Email is not valid"
    if (!isPassword) return "Password is not valid"

    return null
}