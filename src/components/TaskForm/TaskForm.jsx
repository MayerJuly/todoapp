import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";

const TaskForm = ({create}) => {
    const [task, setTask] = useState( {id:'', title: '', status: false})



    const addNewTask = (e) => {
        if(task.title) {
            if(e.which === 13) {
                console.log()
                e.preventDefault();
                const newTask = {
                    ...task, id: Date.now()
                }
                create(newTask);
                setTask({id:'', title: '', status: false})
        }

        }



    }


    return (
        <div>
            <MyInput value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} placeholder="New task..." onKeyDown={(e)=> addNewTask(e)}/>

        </div>
    );
};

export default TaskForm;