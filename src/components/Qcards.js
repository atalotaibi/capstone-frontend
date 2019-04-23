import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnswerForm from "./AnswerForm";

import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class Qcards extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">{question.q_text}</h5>

            <p className="card-text">THis is a contect for a question</p>
            <a className="btn btn-primary">Button</a>

            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
//             <Link to="/Qlist">
//               <AnswerForm />
//               <button type="submit">post</button>
//             </Link>

          </div>

          <div className="col-md-2">
            <button
              onClick={questionID =>
                this.props.deleteQuestion(this.props.question.id)
              }
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: questionID =>
      dispatch(actionCreators.deleteQuestion(questionID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Qcards);
