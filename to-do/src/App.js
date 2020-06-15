import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        // {id: 0, title: 'Task 1', done: false },
        // {id: 1, title: 'Task 2', done: true },
        // {id: 2, title: 'Task 3', done: false }
      ]
    };
  }

  addTask = taskName => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: taskName,
        done: false
      });
      return tasks;
    })
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      // this.addTask(123);
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    // const doneTasks = tasks.filter(task => task.done);

    return(
      <div className = "App">
        <h1 className = "top">
          Active tasks: {activeTasks.length}
        </h1>
        {tasks.map(task =>(
          <Task
            doneTask = {() => this.doneTask(task.id)}
            deleteTask = {() => this.deleteTask(task.id)}
            task = {task}
            key = {task.id}
          ></Task>
        ))}
        <TaskInput addTask = {this.addTask}></TaskInput>
      </div>
    );
  }
}

export default App;
