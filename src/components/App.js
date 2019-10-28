import React from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import '../styles/App.scss';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import Homescreen from './Homescreen';
import NewQuestion from './NewQuestion';

class App extends React.Component{
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <Homescreen />
        <NewQuestion />
        <Leaderboard />
      </div>
    );
  }
}

export default connect()(App);
