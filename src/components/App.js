import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
//importing routing modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importing stylesheet
import "../styles/App.scss";
// importing components
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Homescreen from "./Homescreen";
import NewQuestion from "./NewQuestion";
import Poll from "./Poll";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homescreen}/>
          <Route path='/add' exact component={NewQuestion} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path={`/questions/:question_id`} component={Poll} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
