import * as React from "react";
import { Chart } from "react-google-charts";
import { render } from "react-dom"
// import App from './App';
// import TaskInput from "./TaskInput"
import datatable from "./data";

const ExampleChart = () => {
  return (
    <Chart
  width={'90%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data = {datatable}
  rootProps={{ 'data-testid': '1' }}
    />
  );
};
 
export default ExampleChart;

render(
  <ExampleChart />,
  // <form><p><input type="text" size="40" /></p></form>,
  // <div><TaskInput addTask = {App.addTask}></TaskInput>></div>,
  document.getElementById('root')
);
