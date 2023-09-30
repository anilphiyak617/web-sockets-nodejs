let student = {
  name: "anil",
  roll: 23434,
};

const changeName = function () {
  //   console.log(student);
  console.log(this);
  this.name = "ayush";
};

const newFunc = changeName.bind(student);

newFunc();
console.log(student);

// for (let item of Object.keys(student)) {
//   console.log(item);
// }

Object.assign(student, { name: "raja" });
console.log(student);

const id = setInterval(() => {
  const date = new Date();
  console.log(date.toLocaleTimeString());
}, 10000);
