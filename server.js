const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({  origin: '*'}))

const PORT = process.env.PORT || 3000;

const move = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
const action = ["BOMB", "COLLECT","ATTACK", "NONE"];


app.listen(PORT, () => {
  console.log("Serveur sur écoute :", PORT);
});

    let itemBot = {
    "bombs": 3
    }
app.get("/action", (request, response) => {
    let selectedAction = "NONE";
    if (itemBot.bombs < 1) {
        const filteredActions = action.filter(act => act !== "BOMB");
        const randomAction = Math.floor(Math.random() * filteredActions.length);
        selectedAction = filteredActions[randomAction];
    } else {
        const randomAction = Math.floor(Math.random() * action.length);
        selectedAction = action[randomAction];
        if (selectedAction === "BOMB") {
            itemBot.bombs--;
        }
    }
    const randomMove = Math.floor(Math.random() * move.length);
    let selectedMove = move[randomMove];
   const bot = {
      "move": selectedMove,
      "action": selectedAction
   };
   
   response.send(bot);
});

module.exports = app;