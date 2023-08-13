import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
{
  /* index.css Läuft nicht so gut mit Websockets. Datei kann aus dem Verzeichnis gelöscht werden
  import "./index.css";
  Nachschauen was genau Websockets sind und warum diese nicht CHats laufen*/
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

{
  /* StrictMode wird aus der Muster main.jsx entfernt.
 Läuft nicht so gut mit WebSockets. Hinzufügen von <App/>,
 <React.StrictMode>
    <App />, 
</React.StrictMode>,*/
}
{
  /* Nächster Schritt ist die Frontpage App zu erstellen. Zum rendern
der Authentifizieurngsfensters und des Chats. App,jsx
Wofür ist die main.jsx genau? Aufbau?
 */
}
// beim Starten mit "npm run dev" wird sowohl der node server als auch frontend react app
