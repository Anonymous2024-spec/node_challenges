const args = process.argv.slice(2);
let myName = args[0];

if (!myName) {
  console.log("Provide ur name");
  process.exit(1);
}
let upperCase = myName.toUpperCase();
console.log(upperCase);
