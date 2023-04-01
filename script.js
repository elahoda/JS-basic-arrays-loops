var hobbies = ["skiing", "biking", "flying", "running", "hiking", "painting"];
hobbies.push("rafting");

console.log(hobbies);
console.log(hobbies.length);
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 2, "kyacking", "scubadiving");
hobbies.shift();
hobbies.unshift("rocknroll");
console.log(hobbies);

var goals = ["coding", "REInvesting", "RESelling"];
var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  console.log(`I can't wait to start ${item}`);
});
