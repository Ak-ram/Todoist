import { Line } from "react-chartjs-2";
import { Component } from "../../utils/modules";

class ProgressionGraph extends Component {
  render() {
    return (
      <Line
        data={{
          labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], // X-axis labels
          datasets: [
            // each object represent one chart graph
            {
              label: "Daily goals",
              data: [1, 2, 3, 4, 4, 5, 5],
              backgroundColor: "#5e5e5e",
              borderColor: "#5e5e5e",
              borderWidth: 0.9,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          // indexAxis: "y", // for horizontal bar
        }}
      />
    );
  }
}

export default ProgressionGraph;
