function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Alex');

console.log(user.name, user.isAdmin);



function Us(name) {
    //this = {}
    this.name = name;
    //return this
}


function Post(data) {
    this.data = data;
    this.outputData = () => {
        console.log(this.data);
    }
}

let firstPost = new Post('bla bla');
firstPost.outputData();