import { Component, VscArrowRight } from "../../utils/modules";
class TaskManger extends Component {
    render() { 
        return (
          <>
            <section className="taskManger">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="taskManger__content col-12 col-md-6 order-1 order-md-0 text-center text-md-start">
                    <h2 className="h1">
                      A task manager you can trust for life
                    </h2>
                    <p>
                      In the 14 years and 229 days that we’ve been building
                      Todoist, we’ve never considered selling out or becoming
                      acquired. <br /> Our team is committed to staying
                      independent and earning your trust for as long as you need
                      our apps.
                    </p>
                    <a href="e">
                      <VscArrowRight className="me-2" />
                      Learn about our long-term mission
                    </a>
                  </div>
                  <div className="taskManger__img col-6 col-md-5">
                    <img
                      src="https://todoist.com/_next/static/images/mission@2x_82d22d316905695549dd5c53a4da5e95.jpg"
                      alt=""
                      className="img-thumbnail border-0"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
}
 
export default TaskManger;