import React, { Component } from "react";
import "./index.css";

export default class exam_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      sname: "",
      dates: "",
      stime: "",
      etime: "",
    };
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesubmit = (event) => {
    alert(`user name is ${this.state.uname}. 
         subject name is ${this.state.sname}
         date of test ${this.state.dates}.
         start time ${this.state.stime}
         end time ${this.state.etime}
         `);
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div className="examDetailsContainer">
        <div className="card-header">
          <h3>Test Details</h3>
        </div>
        <div className="examFieldContainer">
          <form onSubmit={this.handlesubmit}>
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                name="uname"
                value={this.state.uname}
                onChange={this.handlechangeall}
                placeholder="user name"
              />
            </div>
            <div className="form-group">
              <label>Subject name</label>
              <input
                type="text"
                className="form-control"
                name="sname"
                value={this.state.sname}
                onChange={this.handlechangeall}
                placeholder="ex:- Physics"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="Date"
                className="form-control"
                name="dates"
                value={this.state.dates}
                onChange={this.handlechangeall}
                placeholder="DD/MM/YY"
              />
            </div>
            <div className="form-group">
              <label>Start Time</label>
              <input
                type="time"
                className="form-control"
                name="stime"
                value={this.state.stime}
                onChange={this.handlechangeall}
                placeholder="HH:MM"
              />
            </div>
            <div className="form-group">
              <label>End Time</label>
              <input
                type="time"
                className="form-control"
                name="etime"
                value={this.state.etime}
                onChange={this.handlechangeall}
                placeholder="HH:MM"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Continue To Upload
            </button>
          </form>
        </div>
      </div>
    );
  }
}
