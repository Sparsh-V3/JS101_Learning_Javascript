// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "Sparsh24";
let stored_password = "Kimetsu No Yaiba";

let i_username = "Sparsh24";
let i_password = "demon slayer";

if(stored_username == i_username)
{
  if(stored_password == i_password)
  {
    console.log("Login Successfull");
  }
  else if(stored_password != i_password)
  {
    console.log("Incorrect Password");
  }
}
else
  console.log("Incorrect Username");
