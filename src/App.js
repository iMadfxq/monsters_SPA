import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    let searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1>Monsters Single Page Application</h1>
        <p>Built using React</p>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder={"Search Monsters"}
          className={"monsters-search-box"}
        />
        <CardList monsters={filteredMonsters} />
        <Footer portfolio={"https://imadfxq.com/"} />
      </div>
    );
  }
}

export default App;
