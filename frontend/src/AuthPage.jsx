{
  /* Datei wurde neu erstellt. 
Mustercode steht in der Anleitung für AuthPage.jsx
Code von der API Website kopiert und modifiziert 
FUnktion vom COde noch mal nachgucken und verstehen. 
FÜr das aussehen der App den CSS COde vom link 
https://raw.githubusercontent.com/alamorre/nodejs-chat-frontend/main/src/App.css kopieren */
}
import axios from "axios";
{
  /* Zeile/Abhängigkeit neu hinzugefügt (import dependencie).  */
}
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    axios //ist axios ein Objekt? axios.post .then .catch neu hinzugefügt.
      //was genau machen die? Was ist das für ein Format. Andere Formatieurng und Kommentierung.
      //Weiter untern ist auch HTML code
      //make the axios call a post request to our node.js Server
      //When das geklappt hat dann "then"
      //.catch wenn ein error erfasst werden muss
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };
  /*
    Alter callback 
props.onAuth({ username: value, secret: value })*/

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
