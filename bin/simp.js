#!/usr/bin/env node
const chalk = require('chalk');

const compliments = [
  "This code is absolutely gorgeous! ✨",
  "You're a coding genius! 🧠",
  "This function is a work of art! 🎨",
  "Your variable names are poetry! 📜",
  "This is the cleanest code I've ever seen! ✨",
  "You're crushing it! 🔥",
  "This commit is legendary! 🏆",
  "Your coding style is immaculate! 💎",
  "This is pure perfection! 👌",
  "You're a 10x developer! 🚀",
  "This code belongs in a museum! 🏛️",
  "You make coding look easy! 😎",
  "This is absolutely stunning! 😍",
  "You're a wizard, Harry! 🧙‍♂️",
  "This code is chef's kiss! 👨‍🍳💋",
];

const compliment = compliments[Math.floor(Math.random() * compliments.length)];

console.log('\n' + chalk.magenta('💘 CODE SIMPS'));
console.log(chalk.cyan('╔' + '═'.repeat(compliment.length + 4) + '╗'));
console.log(chalk.cyan('║') + '  ' + chalk.yellow(compliment) + '  ' + chalk.cyan('║'));
console.log(chalk.cyan('╚' + '═'.repeat(compliment.length + 4) + '╝\n'));
