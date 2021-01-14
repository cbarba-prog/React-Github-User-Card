import React from "react";
import "./App.css";
import Card from "./Components/Card";

class App extends React.Component {
  state = {
    profile:{},
    followers:[],
  };

  componentDidMount(){
    fetch("https://api.github.com/users/cbarba-prog")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ profile: data });
    })
    .catch((err) => {
      console.log(err);
    });

    fetch("https://api.github.com/users/cbarba-prog/followers")
    .then((res) => res.json())
      .then((data) => {
        this.setState({ followers: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(){
    return(
      <div className = "App">
        <header className = "App-header">
        <Card profile={this.state.profile} followers={this.state.followers} />
        </header>
      </div>
       );
      }
}
    
export default App;