import React from "react";
import PropTypes from "prop-types";
import { Paper, Box } from "@material-ui/core";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

function BarChart({ data }) {
  return (
    <Box mb="1.5em">
      <Paper>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="temp" argumentField="time" color="#3f51b5" />
          <Title text="24h temperature" />
        </Chart>
      </Paper>
    </Box>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number,
      time: PropTypes.string,
    })
  ),
};

export default BarChart;
