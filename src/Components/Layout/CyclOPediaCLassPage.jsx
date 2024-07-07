import React from "react";
import getRandomUser from "../../Utility/api";

class CyclOPediaCLassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cylcopediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    console.log("Component Did Mount");
    if (JSON.parse(localStorage.getItem("cylcopediaState"))) {
      // this.setState(JSON.parse(localStorage.getItem("cylcopediaState")));
    } else {
      const response = await getRandomUser();
      //console.log(response);
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  render() {
    console.log("Render Component");
    return (
      <div>
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name:{this.state.instructor.name} <br />
            Email:{this.state.instructor.email} <br />
            Phone:{this.state.instructor.phone} <br />
          </div>
        )}
      </div>
    );
  }
}
export default CyclOPediaCLassPage;
