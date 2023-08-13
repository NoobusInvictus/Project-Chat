{
  /*Diese MainApp Component rendert die Autenttifizierungseite ob
der Benutzer sich eingelogt hat oder nicht. Und soll die Chat seite rendern
wenn der Benutzer sich einlogt hat. 
Der Mustercode bei der Dateierstellung wurde gelöscht. 
Die Frontapp wurde mit dem API COde Step 3 von der Anleitung gefüllt
und macht genau, das was oben beschrieben worden ist. 
Es müssen nur noch die "./AuthPage"; und "./ChatsPage"; erstellt werden
 */
}

import { useState } from "react";
{
  /*Importiert Styles und Seiten Auth, Chatspage */
}

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    {
      /* Negation "!", Negiert den Wert. 
      Also wenn User nicht existiert wird schleife durchlaufen. 
      Ansonsten else {}*/
    }
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
