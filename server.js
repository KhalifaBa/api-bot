const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const move = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
const action = ["BOMB", "COLLECT","ATTACK", "NONE"];

app.listen(PORT, () => {
  console.log("Serveur sur écoute :", PORT);
});

app.get("/action", (request, response) => {
   const bot = {
      "move": "",
      "action": ""
   };
   
   response.send(bot);
});