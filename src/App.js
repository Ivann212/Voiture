import React from "react";
import "./App.css";

function DisplayColor(props) {

  if (props.color != "") {
    return <li>Couleur : {props.color}</li>;

  } else {

    return <li>Couleur non défini</li>;
  }
}


class App extends React.Component {

  constructor(props) {

    super(props);

    this.changeColor = this.changeColor.bind(this);

    this.state = {
      brand: "Peugeot",
      model: "306",
      color: ""
    };
  }

  changeColor(event) {
    this.setState({ color: event.target.value });
    event.target.value = "";
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ma voiture</h1>
        </header>

        <main>
          <h2>Ses caractéristiques</h2>
          <ul>
            <li>Marque : {this.state.brand}</li>
            <li>Modèle : {this.state.model}</li>
            <DisplayColor color={this.state.color} />
          </ul>

          <form>
            <div className="row">
              <label htmlFor="color">Nouvelle couleur</label>
              <select name="color" onChange={this.changeColor}>
                <option value="">-- Veuillez faire un choix --</option>
                <option value="Rouge">Rouge</option>
                <option value="Bleu">Bleu</option>
                <option value="Noir">Noir</option>
                <option value="Blanc">Blanc</option>

              </select>

            </div>
          </form>
        </main>

      </div>
    )
  }
}
export default App