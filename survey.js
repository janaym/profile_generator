const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = {};

rl.question('What is your preferred name?', (name) => {
  data.name = name;

  rl.question("What is an activity you enjoy?", (activity) => {
    data.activity = activity;

    rl.question("What do you listen to while doing that?", (tunes) => {
      data.tunes = tunes;

      rl.question("What's your favourite meal of the day?", (meal) => {
        data.meal = meal;

        rl.question("What do you usually eat for that meal?", (food) => {
          data.food = food;

          rl.question("What's your favourite sport?", (sport) => {
            data.sport = sport;

            rl.question("What is a hidden talent of yours?", (talent) => {
              data.talent = talent;

              console.log(`Hey! My name is ${data.name}! My favourite meal of the day is ${data.meal}, for which I usually eat ${data.food}. In my spare time, I like to listen to ${data.tunes} while I partake in ${data.activity}. My favourite sport is ${data.sport}, and a secret hidden talent of mine is ${data.talent}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});









rl.question("What is a hidden talent? of yours?", (talent) => {
  data.talent = talent;
  rl.close();
});



//console.log(data);