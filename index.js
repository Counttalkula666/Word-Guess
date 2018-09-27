


// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var Game = require("./elements/game");

// Initialize a new Game object
var game = new Game();

// Start playing
game.play();