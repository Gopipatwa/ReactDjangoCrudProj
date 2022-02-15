import React from 'react';
const TaskCard = ({item,deletehandler,updateHandler}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          Task status: {item.completed?'yes':'No'}
        </p>
        <div className="d-flex justify-content-evenly">
          <button onClick={()=>deletehandler(item.id)}>Delete</button>
          <button onClick={()=>updateHandler(item.id)}>Update</button>
        </div>
          
      </div>
    </div>
  )
}
export default TaskCard
