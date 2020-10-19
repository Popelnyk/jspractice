function askPassword(ok, fail) {
    const password = "Password?";
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(() => user.loginOk(), () => user.loginFail());