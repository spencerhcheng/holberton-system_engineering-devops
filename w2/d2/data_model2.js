/*
For this exercise, you will create complex objects that are meant to be
parsed by specified functions.
*/

//~~~~~~1
// Create the data object that this function is expecting
//Example
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

var users1 = //your code here;

function printUsers (users) {
  users.forEach(function (user) {
    console.log(user.id + ": " user.username);
  });
}

//Uncomment when ready to test
//printUsers(users1);


//~~~~~~2
// Create the data object that this function is expecting
//Example
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users

var users2 = //your code here;

function printUsersWebsites (users) {
  users.forEach(function (user) {
    console.log("~~" + user.username + "~~");

    user.sites.forEach(function (site) {
      console.log("  -" + site.url);
    });
  });
}

//Uncomment when ready to test
//printUsersWebsites(users2);


//~~~~~~3
// Create the data object that this function is expecting
//Example
// printUsersWebsitesInfo(users3)
// ~~UserName1~~
//   -siteName1.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName2.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ~~UserName2~~
//   -siteName3.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName4.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName5.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ...and so forth, for all the users

var users3 = //your code here;

function printUsersWebsitesInfo (users) {
  users.forEach(function (user) {
    console.log("~~" + user.username + "~~");

    user.sites.forEach(function (site) {
      console.log("  -" + site.url);
      console.log("    -load:" + site.load);
      console.log("    -# of users:" + site.userCount);
      console.log("    -popularity" + site.pop);
    });
  });
}

//Uncomment when ready to test
//printUsersWebsitesInfo(users3);
