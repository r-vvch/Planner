import React from 'react';
// import TaskInput from "./TaskInput";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' },
        ],
        [
          'Research',
          'Find sources',
          new Date(2015, 0, 1),
          new Date(2015, 0, 5),
          null,
          100,
          null,
        ],
        [
          'Write',
          'Write paper',
          null,
          new Date(2015, 0, 9),
          3 * 24 * 60 * 60 * 1000,
          25,
          'Research,Outline',
        ],
      ]
    };
  }

  addTask = taskName => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        tasks
      });
      return tasks;
    })
  }
}

export default App;
