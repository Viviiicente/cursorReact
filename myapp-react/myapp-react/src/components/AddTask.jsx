import React, {useState} from 'react';

import Button from './Button';

import "./AddTask.css";


const AddTask = ({handleTaskAddition}) => {

    const [InputDate, setInpuDate] = useState("");

    const handleInputChange = (e) => {
        setInpuDate(e.target.value);
        
    }

const handleAddTaskClick =() =>{
     handleTaskAddition(InputDate);
     setInpuDate("");
}

    return ( 
    <div className='add-task-container'>
<input onChange={handleInputChange} 
value={InputDate}
className='add-task-input'
 type="text" /> ;
<div className="add-task-button-container">
<Button onClick={handleAddTaskClick}>Adicionar</Button>
</div>

 </div>
    
    );
}
 
export default AddTask;