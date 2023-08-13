// Code von der Website https://blog.chatengine.io/fullstack-chat/nodejs-reactjs

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  //Chatgptstop
  // fragen was dieser befehl bedeutet "try" was macht er genau?
  //erzeugt anfrage mit axios.put and url aus API vorgaben von ChatEngine website
  //Stimmt aber nicht ganz mit API vorgaben überein
  //
  try {
    // aufbau, syntax .put("URL", "O"bjekt", "Header")? nachschauen! Kein json format.
    //Json format für Header string angegeben.
    const r = await axios.put(
      //const r soll für response stehen
      "https://api.chatengine.io/users/",

      { username: username, secret: username, first_name: username },
      //Nach API Angaben muss in den Header der Private key
      { headers: { "private-key": "fe0c4f19-04ee-4663-b1c4-9f970608321d" } }
    );

    //Nachgucken was res.status bedeutet/methode ist. Antwort Status für (response.status)
    //response.status = status von unserer const "response"
    //response.data = Festlegen was als json datei "responded" wird?
    return res.status(r.status).json(r.data);
  } catch (e) {
    //Wenn ein fehler auftritt festhalten in catch. e=error
    //nachschauen ob e nur variable oder e. für error steht
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
