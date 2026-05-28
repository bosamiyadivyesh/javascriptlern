// function setusname(username) {
//   this.username = username;
// }
// function creteuser(username, useremail, userpassword) {
//   setusname(username);
//   this.useremail = useremail;
//   this.userpassword = userpassword;
// }
// let frist = new creteuser("Divyesh", "divy@google.com", 12345);
// console.log(frist);
//creteuser { useremail: 'divy@google.com', userpassword: 12345 }

// so name not show and not work because i call setname so in call stack setname work done and it exit so name cleare in memry so it not show
//solutin is call method call method send one this(our curent context) so name can assign our this so it work now


//solution

function setusname(username) {
  this.username = username;
}
function creteuser(username, useremail, userpassword) {
  setusname.call(this,username);
  this.useremail = useremail;
  this.userpassword = userpassword;
}
let frist = new creteuser("Divyesh", "divy@google.com", 12345);
console.log(frist);
//creteuser {username: 'Divyesh',useremail: 'divy@google.com',userpassword: 12345}
