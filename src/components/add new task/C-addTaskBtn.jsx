import { Component, PlusIcon, AddNewTask } from "../../utils/modules";
import { addTask } from "../../utils/functions";
class AddTaskButton extends Component {
  render() {
    return (
      <>
        <main className="inbox-list-box py-2">
          <ul className="list-unstyled m-0">
            
            <li
              className="add-task-with-plus-btn fs-sm w-fit-content hover-text-semiRed text-secondary cursor-pointer smooth-fast"
              onClick={addTask}
            >
              <PlusIcon
                size="20px"
                classes="text-semiRed rounded-circle me-2 smooth"
              />
              Add task
            </li>
            <AddNewTask />
          </ul>
        </main>
      </>
    );
  }
}

export default AddTaskButton;
