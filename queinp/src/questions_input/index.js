import React from "react";
import "./index.css";

class questions_input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: {
        testId: "",
        quesId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOptions: "",
      },
      testQuestions: [],
    };
  }

  addItem = () => {
    const { questionObj, testQuestions } = this.state;
    this.setState({
      testQuestions: [
        ...testQuestions,
        {
          testId: questionObj.testId,
          quesId: questionObj.quesId,
          question: questionObj.question,
          correctOptions: questionObj.correctOptions,
          questionOptions:[questionObj.option1,questionObj.option2,questionObj.option3,questionObj.option4]
        },
      ],
      questionObj: {
        testId: "",
        quesId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOptions: "",
      },
    });
  };

  /* The function is used to submit the Item */
  submitItem = () => {
    const { testQuestions } = this.state;
    // Make the POST API call and submit the testQuestions to it.
    console.log(testQuestions);
  };

  /* This is Delete Item function*/
  deleteItem = (e) => {
    const { testQuestions } = this.state;
    const idDelete = parseInt(e.target.id);
    const list = [...testQuestions]; // append to list
    const updated_list = list.filter((item) => item.quesId !== idDelete); // remove item which match with id
    this.setState({
      testQuestions: updated_list,
    });
  };

  // this function used to get new item
  updateInput = (e) => {
    const { questionObj } = this.state;
    const key = e.target.name;
    const value = e.target.value;
    const category = { ...questionObj, quesId: Date.now() };
    category[key] = value;
    this.setState({ questionObj: category });
  };

  // Render complete html code
  render() {
    const { questionObj, testQuestions } = this.state;
    return (
      <div className="questionContainer">
        <div className="card-header">
          <h3>Add Questions</h3>
        </div>
        <div>Add Questions and options.</div>
        <div className="questionInputContainer">
          <div className="enter-question">
            <input
              type="text"
              name="testId"
              className="input-question"
              placeholder="Enter Test Id"
              value={questionObj.testId}
              onChange={this.updateInput}
            />
          </div>
          <div className="enter-question">
            <input
              type="text"
              name="question"
              className="input-question"
              placeholder="Write the Question"
              value={questionObj.question}
              onChange={this.updateInput}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option1"
              className="input-options"
              placeholder="Enter option 1"
              value={questionObj.option1}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option2"
              className="input-options"
              placeholder="Enter option 2"
              value={questionObj.option2}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option3"
              className="input-options"
              placeholder="Enter option 3"
              value={questionObj.option3}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option4"
              className="input-options"
              placeholder="Enter option 4"
              value={questionObj.option4}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="correctOptions"
              className="input-options"
              placeholder="Enter Correct Answer"
              value={questionObj.correctOptions}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="action-button">
            <button
              className={`add-btn ${
                questionObj.question.length === 0
                  ? "disable-button"
                  : "enable-button"
              }`}
              onClick={this.addItem}
              disabled={questionObj.question.length === 0}
            >
              Add Todo
            </button>
          </div>
        </div>
        <div className="questionInputContainer">
          <div>
            {testQuestions.map((item) => {
              return (
                <div className="added-item">
                  <div className="question-item">{item.question}</div>
                  <div className="button-div">
                    <button
                      className="delete-btn"
                      id={item.quesId}
                      onClick={this.deleteItem}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="action-button">
            <button
              className={`add-btn ${
                testQuestions.length === 0 ? "disable-button" : "enable-button"
              }`}
              onClick={this.submitItem}
              disabled={testQuestions.length === 0}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default questions_input;
