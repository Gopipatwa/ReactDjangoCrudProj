



// Update is pending


import React, { useEffect,useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import API from './api/API';
import About from './component/About';
import Home from './component/Home';
import {v4 as uuid} from 'uuid';
export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDoList,setNewToDoList] = useState([]);
  
  const retreiveToDoList = async ()=>{
    const response = await API.get('task-list')
    return response.data
  }
  const setInputHandler = (title,completed)=>{
    let obj = {'id':uuid(),'title':title,'completed':completed};
    if(postRequest(obj)) setToDoList([...toDoList,obj]); 
  }
  const postRequest = async (obj)=>{
    const response = await API.post('task-create/',obj);
    if(response){
      return response.data
    }
  }
  const deletehandler = (id)=>{
    console.log(id);
    const response = API.delete(`task-delete/${id}`)
    if(response) {
      const newList = toDoList.filter((item)=>{
        return item.id !== id?item:''
      })
      setToDoList(newList)
    }
  }
  const updateHandler = (id)=>{
    
  }

  useEffect(()=>{
    const retreivealFunction = async ()=>{
      const response = await retreiveToDoList();
      if(response) {
        console.log('inside useeefffect');
        setToDoList(response)
      }
    }
    retreivealFunction();
  },[])

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home setInputHandler={setInputHandler} deletehandler={deletehandler} toDoList={toDoList} />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </div>
  )
}
