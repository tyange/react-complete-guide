import React, { Component } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "ty", age: 30 },
      { name: "eunmin", age: 29 },
      { name: "mandoo", age: 100 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "eunmin", age: 29 },
        { name: "mandoo", age: 100 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "ty", age: 30 },
        { name: event.target.value, age: 29 },
        { name: "mandoo", age: 100 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/*
      below onClick way can be ineffeciant, because react-rerender problem.
      So, we can use .bind way where below than this way.
      */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
