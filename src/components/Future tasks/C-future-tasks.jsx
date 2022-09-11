import { Component, AddTaskButton } from "../../utils/modules";
class FutureTasks extends Component {
  state = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    daysInMonth: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate(),
    // taskLength: JSON.parse(localStorage.getItem("S1")).length,
    // taskLength: 0,
  };

  update = () => {
    if (this.state.day < this.state.daysInMonth) {
      this.setState({
        day: this.state.day + 1,
      });
    }
    if (this.state.day === this.state.daysInMonth) {
      this.setState({
        day: 1,
        month: this.state.month + 1,
      });
    }
    if (this.state.month === 12) {
      this.setState({
        day: 1,
        month: 1,
        year: this.state.year + 1,
      });
    }
    
  };
  render() {
    return (
      <>
        <section className="future-tasks mb-4 p-1 rounded  border-1">
          <div
            className="future-task-date badge mb-2 text-center px-2 border border-secondary-200 fw-bold text-secondary-200"
            onClick={this.update}
          >
            {this.props.dayDate}
            
          </div>
          <div
            className="future-task-screen fw-bold text-center text-warning"
            style={{ letterSpacing: "1px" }}
          >
            {this.props.children} {/* TaskList is a children */}
          </div>
          <div className="new-future-task">
            <AddTaskButton />
          </div>
        </section>
      </>
    );
  }
}

export default FutureTasks;
