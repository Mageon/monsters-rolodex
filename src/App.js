import "./App.css";
import { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    // the above line is equal as:
    // const monsters = this.state.monsters; and
    // const searchField = this.state.searchField;


    // This function filter monsters list if searchField var exists in the monster name
    const filteredMonsters = monsters.filter(
      monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
      


    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters" 
          handleChange={e => {
            this.setState({searchField: e.target.value});
          }
        }/>
        {/* <input 
          type='text' 
          placeholder='Search Monsters' 
          onChange={e => {
            this.setState({searchField: e.target.value});
            // this.setState({searchField: e.target.value}, () => console.log(this.state.searchField) );
            // console.log(this.state.searchField);
            // if we put the above line console log do not shows result after another action is performed
            // but if we add it inside the setState function call as seen above il will work as intended.
            }
          }
        /> */}
        <Cardlist monsters={/*this.state.monsters*/ filteredMonsters} >
        </Cardlist>
      </div>
    );
  }
}

export default App;
