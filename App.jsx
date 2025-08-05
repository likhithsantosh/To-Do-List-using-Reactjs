import { useState } from 'react';
import './App.css';
import TaskItem from './Components/TaskItem';
import DeleteItem from './Components/DelteItem';

function App() {
  
  const [newtask, setnewtask] = useState("");
  const [mytasks, setmytasks] = useState(["writingbooks", "playingguitar", "coding"]);
  const [completedtasks, setcompletetasks]=useState([]);

  function handleInput(e){
    let newvalue = e.target.value;
    setnewtask(newvalue);
    
  }
  function Addtask(){
    
    setmytasks(prev=>[...prev, newtask]);
    console.log(mytasks);
    setnewtask(""); 
  }
  function deletetask(taskName){
    let afterdeletion = mytasks.filter(x => x !=taskName);
    setmytasks(afterdeletion);
  }
  function completetask(taskName){
    let aftercompleting = mytasks.filter(x => x==taskName);
    let afterfiltering = mytasks.filter(x => x !=taskName);
    setmytasks(afterfiltering);

    setcompletetasks(prev=>[...prev, aftercompleting[0]]);
  }
  function deletecompletedtasks(taskName){
    let afterdeletiontask = mytasks.filter(x => x !=taskName);
    setcompletetasks(afterdeletiontask);
  }
  return (
    <div className="main-body d-flex justify-content-center align-items-center">
      <div className="to-do-list-main ">
        <h3>My To-Do-List</h3>
        <div>
          <div className='todo-task-input'>
            <div className="form-floating w-75">
            <input type="Text" className="form-control" id="floatingInput" placeholder='ToDo Task' onChange={(e)=>{
              handleInput(e)
            }} value={newtask}/>
            <label htmlFor="floatingInput">To Do Task</label>

          </div>
            
          <button className='btn btn-danger  w-25' id="add-btn" onClick={()=>{Addtask()}}>+</button>
          </div>
          <h5>To Do Tasks</h5>
          <ul className='tasks-list'>
            {
              mytasks.map((task, index)=>
              <TaskItem taskName={task} key={index} deletetask={deletetask} completetask={completetask}/>)
            }
            

            
          </ul>
          <h5>Completed Tasks</h5>
          <ul className='tasks-list'>
            {
              completedtasks.map((task, index)=>
              <DeleteItem taskName={task} key={index} deletetask={deletecompletedtasks} />)
            }
            

            
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
