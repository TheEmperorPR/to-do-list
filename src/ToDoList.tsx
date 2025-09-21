import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){ 
        setNewTask(event.target.value);
    }

    function addtask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    
    }
    function deleteTask(index: number){
        const updatedtasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedtasks);
    }
    function moveTaskUp(index: number){
        const updatedTasks = [...tasks];
        if(index > 0){
            [updatedTasks[index -1],updatedTasks[index]] = [updatedTasks[index],updatedTasks[index -1]];
        }
        setTasks(updatedTasks);
    }
    function moveTaskDown(index : number){
        const updatedTasks = [...tasks];
        if(index < tasks.length-1){
            [updatedTasks[index +1],updatedTasks[index]] = [updatedTasks[index],updatedTasks[index +1]];
        }
        setTasks(updatedTasks);
    }

    return(
        <div className="to-do-list">
        <h2>To Do List</h2>
        <div>
            <input 
                type="text"
                placeholder="Enter The Task..."
                className="input-task"
                value={newTask} 
                onChange={handleInputChange}
            />
            <button className="add-button" onClick={() => addtask()}>Add</button>
        </div>
        <ol>
            {
                tasks.map((task,index) => 
                        <li key={index}>
                            <span className="task-span">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="up-button" onClick={() => moveTaskUp(index)}>UP</button>
                            <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                        </li>            
                )
            }
        </ol>
        </div>
    )

}

export default ToDoList;