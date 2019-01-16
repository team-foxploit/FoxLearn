import React, { Component } from "react";
//import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Chart } from "react-google-charts";
import Footer from "../footer/footer";

class History extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align blue lighten-2 white-text">
            Your Performance
          </h2>
          <div className="row">
            <div className="col s12 m12">
              <div className="card-panel teal">
                <h4 className="white-text">Current Rank</h4>
                <hr />
                <span className="white-text">
                  <h1>02</h1>
                </span>
              </div>

              <div className="card-panel teal">
                <h4 className="white-text">Science</h4>
                <hr />
                <span className="white-text">
                  <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Attempt", "Marks"],
                      [1, 4.5],
                      [2, 5.5],
                      [3, 10],
                      [4, 5],
                      [5, 8.5]
                    ]}
                    options={{
                      title: "Marks for last 5 attempts",
                      hAxis: { title: "Attempt", minValue: 0, maxValue: 5 },
                      vAxis: { title: "Mark", minValue: 0, maxValue: 10 },
                      legend: "none",
                      backgroundColor: "#e3f2fd",
                      is3D: true,
                      animation: {
                        startup: true,
                        easing: "linear",
                        duration: 2500
                      },
                      enableInteractivity: false
                    }}
                    chartEvents={[
                      {
                        eventName: "animationfinish",
                        callback: () => {
                          console.log("Animation Finished");
                        }
                      }
                    ]}
                    rootProps={{ "data-testid": "1" }}
                  />
                </span>
              </div>

              <div className="card-panel teal">
                <h4 className="white-text">History</h4>
                <hr />
                <span className="white-text">
                  <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Attempt", "Marks"],
                      [1, 2.5],
                      [2, 5.5],
                      [3, 5],
                      [4, 5],
                      [5, 3.5]
                    ]}
                    options={{
                      title: "Marks for last 5 attempts",
                      hAxis: { title: "Attempt", minValue: 0, maxValue: 5 },
                      vAxis: { title: "Mark", minValue: 0, maxValue: 10 },
                      legend: "none",
                      backgroundColor: "#e3f2fd",
                      is3D: true,
                      animation: {
                        startup: true,
                        easing: "linear",
                        duration: 2500
                      },
                      enableInteractivity: false
                    }}
                    chartEvents={[
                      {
                        eventName: "animationfinish",
                        callback: () => {
                          console.log("Animation Finished");
                        }
                      }
                    ]}
                    rootProps={{ "data-testid": "1" }}
                  />
                </span>
              </div>

              <div className="card-panel teal">
                <h4 className="white-text">Geography</h4>
                <hr />
                <span className="white-text">
                  <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Attempt", "Marks"],
                      [1, 2.5],
                      [2, 5.5],
                      [3, 3],
                      [4, 5],
                      [5, 3.5]
                    ]}
                    options={{
                      title: "Marks for last 5 attempts",
                      hAxis: { title: "Attempt", minValue: 0, maxValue: 5 },
                      vAxis: { title: "Mark", minValue: 0, maxValue: 10 },
                      legend: "none",
                      backgroundColor: "#e3f2fd",
                      is3D: true,
                      animation: {
                        startup: true,
                        easing: "linear",
                        duration: 2500
                      },
                      enableInteractivity: false
                    }}
                    chartEvents={[
                      {
                        eventName: "animationfinish",
                        callback: () => {
                          console.log("Animation Finished");
                        }
                      }
                    ]}
                    rootProps={{ "data-testid": "1" }}
                  />
                </span>
              </div>

              <div className="card-panel teal">
                <h4 className="white-text">IT</h4>
                <hr />
                <span className="white-text">
                  <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Attempt", "Marks"],
                      [1, 2.5],
                      [2, 5.5],
                      [3, 1],
                      [4, 5],
                      [5, 3.5]
                    ]}
                    options={{
                      title: "Marks for last 5 attempts",
                      hAxis: { title: "Attempt", minValue: 0, maxValue: 5 },
                      vAxis: { title: "Mark", minValue: 0, maxValue: 10 },
                      legend: "none",
                      backgroundColor: "#e3f2fd",
                      is3D: true,
                      animation: {
                        startup: true,
                        easing: "linear",
                        duration: 2500
                      },
                      enableInteractivity: false
                    }}
                    chartEvents={[
                      {
                        eventName: "animationfinish",
                        callback: () => {
                          console.log("Animation Finished");
                        }
                      }
                    ]}
                    rootProps={{ "data-testid": "1" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default History;
