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
import PageNotFound from "./PageNotFound";
import Login from "./Login";

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
          <Route path='/login' exact component={Login} />
          <Route path='/add' exact component={NewQuestion} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path={`/questions/:question_id`} component={Poll} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
