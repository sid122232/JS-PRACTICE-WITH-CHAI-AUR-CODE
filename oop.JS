const user = {
    username:'Siddddddddddddddddddd',
    logginCount:'12',
    isLoggedIn:'true',
    getUserDetails:function(){
        console.log(`username is ${this.username}`)
    }
}
// console.log(user.getUserDetails());
// console.log(this.username);

function User (username,logginCount,isLoggedIn){
    this.username = username;
    this.logginCount=logginCount;
    this.isLoggedIn=isLoggedIn
    return this
}
const userOne = new  User('sid',12,true)

const userTwo = new  User('Siddhant',7,true)

//  userOne = new User('sid',12,true)
console.log(userOne)
console.log(userTwo)