import React, {useState} from 'react';
import Task from './Components/Task';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Add from '@material-ui/icons/Add';

function App() {

  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleInput = (e) => {
    setCurrentTask(e.target.value);
  }

  const addTask = () => {
    tasks.push({content:currentTask, isComplete:false});
    setCurrentTask('');
    setTasks([...tasks]);
  }

  const completeTask = (taskIndex) => {
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    setTasks([...tasks]);
  }

  const deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  return (
    <div>
      <Typography variant='h2' align='center'>To-Do List</Typography>
      <TextField 
        placeholder='Task' 
        label='Task'
        onChange={(e)=>handleInput(e)} 
        value={currentTask} 
        variant='filled'

        fullWidth

        InputProps={{
          endAdornment:(
            <InputAdornment position='end'>
              <IconButton onClick={()=>addTask()}>
                <Add />
              </IconButton>
            </InputAdornment>
          )
        }}

      />
      

      {
        tasks.map((val, i) => {
          return(
            <Task 
              key={i} 
              content={val.content} 
              isComplete={val.isComplete} 
              completeTask={()=>completeTask(i)} 
              deleteTask={()=>deleteTask(i)}
            />
          )
        })
      }
      
    </div>
  );
}

export default App;
