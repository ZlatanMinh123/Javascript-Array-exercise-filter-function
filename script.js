var persons = [
  {
      name: "Minh",
      class: "Learn To Fuck",
      dateJoin: "05-02-2022",
      age: 24,
  },

  {
      name: "Hùng",
      class: "Learn To Fuck",
      dateJoin: "15-06-2022",
      age: 21,
  },

  {
      name: "Cường",
      class: "Learn To Fuck",
      dateJoin: "02-01-2022",
      age: 28,
  },
];

function convertDateToString(dateString) {
  var arrDate = dateString.split("-");
  var date = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];

  return new Date(date);
}

var newArr = persons.filter(function(item) {
  var date = convertDateToString(item.dateJoin);

  return date.getMonth() < 2;
});

console.log(newArr);
