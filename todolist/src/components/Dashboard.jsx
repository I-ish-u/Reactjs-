import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
    const[tasks,setTasks]=useState([
            { id: 1, text: "Learning Programming by 12PM", completed: false },
            { id: 2, text: "Learn how to cook by 1PM", completed: false },
            { id: 3, text: "Learn how to play at 2PM", completed: false },
            { id: 4, text: "Have lunch at 4PM", completed: false },
            { id: 5, text: "Going to travel at 6PM", completed: false },
      ])
      
    const[newTask,setNewTasks]=useState("");

    const togletask=(id)=>{
        setTasks(
            tasks.map((task)=>{
                if(task.id === id){
                    return{ ...task, completed:!task.completed };
                }
                else{
                    return task;
                }
            })
        )
    }

    const addtask=()=>{
        if(newTask.trim() !== ""){
            const newtaskitem={
                id: tasks.length + 1,
                text: newTask,
                completed: false
            }
            setTasks([...tasks,newtaskitem])
            setNewTasks("")
        }
    }
  return (
    <div className="dashboard">
      <header className="header">
        <div className="profile-picture">
          <img
            src="data:image/jpeg;base64,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" // replace with the actual image URL or path
            alt="Profile"
          />
        </div>
        <h2>Welcome Suneel Chauhan</h2>
      </header>

      <section className="task-list">
        <h3>Task List</h3>
        <div className="daily-tasks">
          <h4>Daily Task</h4>
          <ul>
           {tasks.map((task) => (
            <li key={task.id}>
                <input type="checkbox" 
                checked={task.completed} 
                onChange={()=>togletask(task.id)} 
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.text}
                </span>
            </li>
           ))}
          </ul>
          <div className="add-task-section">
            <input type="text" placeholder="New task" value={newTask} onChange={(e)=>setNewTasks(e.target.value)} />
            <button onClick={addtask}>+</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
