import {
  Component,
  Navbar,
  Face,
  MentalSpace,
  Rates,
  Celebrates,
  Members,
  TaskManger,
  Peace,
  Footer
} from "../../utils/modules.jsx";
class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Face />
        <MentalSpace />
        <Rates />
        <Celebrates />
        <Members />
        <TaskManger />
        <Peace />
        <Footer />
      </>
    );
  }
}

export default Home;
