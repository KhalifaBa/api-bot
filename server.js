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

app.get("/action", (request, response) => {
    const randomMove = Math.floor(Math.random() * move.length);
    const randomAction = Math.floor(Math.random() * action.length);

   const bot = {
      "move": move[randomMove],
      "action": action[randomAction]
   };
   
   response.send(bot);
});