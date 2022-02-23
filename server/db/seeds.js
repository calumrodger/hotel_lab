use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Steve",
    email: "steve@codeclan.com",
    checkedIn: false
  },
  {
    name: "Jen",
    email: "jen@codeclan.com",
    checkedIn: true
  },
  {
    name: "Ash",
    email: "ash@codeclan.com",
    checkedIn: true
  }
]);