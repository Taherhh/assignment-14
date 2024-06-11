// assignment no 14

// Define array of guest

let guestlist:string[] = ["Ambreen", "Bilquis", "Abid"];

// Invite guest for dinner

guestlist.forEach(guest => {
      console.log(`Dear ${guest}, you are cordially invited to dinner`);
});

//map

let invitation:string [] = guestlist.map(guest =>`Dear ${guest}, you are cordially invited to dinner`);

console.log (invitation);

