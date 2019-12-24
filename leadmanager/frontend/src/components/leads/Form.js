import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    urgency: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message, urgency } = this.state;
    const lead = { name, email, message, urgency };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
      urgency: ""
    });
  };

  render() {
    const { name, email, message, urgency } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              id="materialUnchecked"
              type="radio"
              name="urgency"
              onChange={this.onChange}
              value="1"
            ></input>
            <label style={{ marginLeft: "2px" }}>Urgent </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="urgency"
              onChange={this.onChange}
              value="2"
            ></input>
            <label style={{ marginLeft: "2px" }}>Soon</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="urgency"
              onChange={this.onChange}
              value="3"
            ></input>
            <label style={{ marginLeft: "2px" }}>Anytime</label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
