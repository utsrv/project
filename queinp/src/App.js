import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import exam_details from "./exam_details";
import exam from "./exam";
import questions_input from "./questions_input";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          <Link className="navbar-brand" to={"/exam_details"}>
              Exam Details
            </Link>
            <Link className="navbar-brand" to={"/exam"}>
              Exam
            </Link>
            <Link className="navbar-brand" to={"/questions_input"}>
              Question Input
            </Link>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/exam" component={exam} />
              <Route path="/exam_details" component={exam_details} />
              <Route path="/questions_input" component={questions_input} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
