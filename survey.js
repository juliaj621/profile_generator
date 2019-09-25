const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let obj = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  obj.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    obj.hobbies = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      obj.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        obj.favouriteMeal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          obj.favouriteFood = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            obj.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              obj.superpower = answer;
              console.log(`"\n" ${obj.name} loves listening to ${obj.music} while ${obj.hobbies}, devouring ${obj.favouriteFood} for ${obj.favouriteMeal}, prefers ${obj.sport} over any other sport, and is amazing at ${obj.superpower} at inopportune times.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});