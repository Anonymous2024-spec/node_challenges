// Use the chalk package to add colored output and figlet to stylize your CLI greeting (e.g., ASCII art "Hello, Naana").
import figlet from "figlet";
import chalk from "chalk";

// console.log(chalk.green("Hello, Shifah!"));

figlet("Hello, Naana!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.red(data));
});
