import React from 'react'
import AddCard from './AddCard';
import TaskCard from './taskCard'

function Home({setInputHandler,toDoList,deletehandler}) {
    console.log(toDoList);
    const deleteCard = (id)=>{
        deletehandler(id);
    }
    const updateHandler = (id)=>{

    }
    return (
        <div className="container mt-5 p-5" style={{border:'solid 1px grey',borderRadius:'10px'}}>
            <h1>Input Fields</h1>
            <AddCard setInputHandler={setInputHandler} updateHandler={updateHandler/>
            
            <div className="mt-5 p-1" id="display-list">
                {toDoList!==[]?toDoList.map((item)=>{
                   return <TaskCard key={item.id} item={item} deletehandler={deleteCard} updateHandler={updateHandler}/>
                }):''
            }
            </div>
        </div>

    )
}

export default Home