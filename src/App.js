import "./App.css";
import { Component } from "react";
import { Cardlist } from "./components/card-list/car-list.component";

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <Cardlist >
          {
            this.state.monsters.map(
              (monster) => (
                <h1>{monster.name}</h1>
              )
            )
          }
        </Cardlist>
      </div>
    );
  }
}

export default App;
