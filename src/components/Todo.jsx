import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus,faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Todo(){
    const[input,setInput] = useState('');
    const[todos,setTodos] = useState([]);

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleClick = (value) => {
        if(value){
            setTodos([...todos,value]);
            setInput('');
        }
    }

    const handleDelete = (index) =>{
        const updatedTodos = todos.filter((elem,ind)=>{
            return ind!==index;
        })
        setTodos(updatedTodos);
    }

    const handleKeyDown = (e)=>{
        if(e.key==='Enter'){
            setTodos([...todos,input])
            setInput('')
        }
    }

    return(
        <>
            <h1 className="title">To-do App</h1>
            <div className="input-holder">
                <input type="text" placeholder="Enter task" value={input} onChange={handleChange} onKeyDown={handleKeyDown}/>
                <button title="Add task" onClick={()=>handleClick(input)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <div className="todos-holder">
                <ul>
                    {todos.map((content,index)=>(
                        <li key={index}>{content} <button className="delete-btn" onClick={()=> handleDelete(index)}><FontAwesomeIcon icon={faTrash}/></button></li>
                    ))}
                </ul>
            </div>
        </>
    );
}