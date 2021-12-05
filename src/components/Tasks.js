import React from 'react';
import Task from './Task';
const Tasks = ({ taskList, onDelete, onToggle }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} taskList={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
};
export default Tasks;
