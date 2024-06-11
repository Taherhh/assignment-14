// assignment no 14
// Define array of guest
var guestlist = ["Ambreen", "Bilquis", "Abid"];
// Invite guest for dinner
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
//map
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
console.log(invitation);
