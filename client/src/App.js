import React from 'react';
import Tasks from './Task';
import { Paper, TextField } from '@material-ui/core';
import { Checkbox, Button } from '@material-ui/core';
import './App.css';

class App extends Tasks {
  state = { tasks: [], currentTask: ""  } 
  render() { 
    const {tasks} = this.state;
    return (
      <div className='App flex'>
        <Paper elevation={3} className="container">
          <div className='heading'>
          TO DO
          </div>
          <form onSubmit={this.handleSubmit} className='flex'
          style={{margin: "15px 0"}}>
            <TextField variant="outlined" size='medium' style={{width: "50%"}} value={this.state.currentTask} required={true} onChange={this.handleChange}
            placeholder="ADD NEW TODO"/>
            <Button style={{height: "40px"}} color="primary" variant='outlined' type='submit'>
              ADD
            </Button>
          </form>
          <div>
            {tasks.map(task => (
              <Paper key={task._id} className="flex task_container">
              <Checkbox checked={task.completed}
              onClick={() => this.handleUpdate(task._id)} 
              color='primary'/>
              <div className={task.completed ? "task line_through" : "task"}>
              {task.task}
              </div>
              <Button onClick={() => this.handleDelete(task._id)} color="secondary">
                delete
              </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}
 
export default App;