function askPassword(ok, fail) {
    const password = "Password?";
    if (password === "rockstar") ok();
    else fail();
}

const user = {
    name: 'John',

    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(() => user.login(true), () => user.login(false));