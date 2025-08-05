import React from "react";
function TaskItem({taskName, deletetask,completetask}){
    return(
        <>
            <li className='task d-flex justify-content-between border-1 border-dark' >
                
                {taskName}
                <div className='task-btn w-50 border-2 border-danger d-flext justify-content-end'>
                    <button className='btn btn-sm btn-success'onClick={()=> completetask(taskName)}>Complete</button>
                    <button className='btn btn-sm btn-danger'onClick={()=>  deletetask(taskName)}>Delete</button>
                </div>
                </li>
        </>
    )
}
export default TaskItem