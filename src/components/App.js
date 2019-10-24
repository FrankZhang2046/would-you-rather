import React from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import '../styles/App.scss';
import Navbar from './Navbar';

class App extends React.Component{
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render(){
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default connect()(App);
