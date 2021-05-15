import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(body => this.setState({ monsters: body }))
  }

  handleSearchFieldChange = (evt) => {
    this.setState({ searchField: evt.target.value })
  }


  render() {

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div class="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters"
          handleChange={this.handleSearchFieldChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
