import React from "react";
import { VictoryChart } from "victory-chart-custom";
import { VictoryLine } from "victory-line-custom";
import { VictoryContainer } from "victory-core-custom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    };
    const chartStyle = {
      parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "40%" },
    };

    return (
      <div className="demo">
        <h1>Open UI Automation (OUIA)</h1>
        <div style={containerStyle}>
          <VictoryChart
            containerComponent={
              <VictoryContainer
                ouiaId="victory-container-ouia"
                ouiaType="Victory/container"
                ouiaSafe
              />
            }
            style={chartStyle}
          >
            <VictoryLine />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default App;
