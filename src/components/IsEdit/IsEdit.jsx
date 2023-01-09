import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import cl from "./IsEdit.module.css";
import MyButton from "../UI/MyButton/MyButton";

const IsEdit = ({task, tasks, setTasks}) => {

    const [edit, setEdit] = useState( null)
    const [editValue, setEditValue] = useState( '')


    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }



    const changeOptions = (task, callback) => {
        let newTasks = [...tasks].filter(item => {
            if (item.id === task.id) callback(item)
            return item
        })
        setTasks(newTasks)
        setEdit(null)
    }


    const editTask = (task) => {
        setEdit(task.id)
        setEditValue(task.title)
    }

    const keyDownChange = (e) => {
        if (e.which === 13 && editValue) {
            changeOptions(task, (item) => {item.title = editValue})
        }
    }


    const taskTitle = [cl.taskTitle]
    const taskButton = [cl.taskButton]

    if(task.status) {
        taskTitle.push(cl.done)
        taskButton.push(cl.buttonDone)
    }


    if(edit === task.id) {

        return (
            <div className={cl.taskContent}>
                <MyInput className={cl.taskInput} value={editValue} onKeyDown={(e)=> keyDownChange(e)} onChange={(e) => setEditValue(e.target.value)}/>
                <MyButton className={cl.taskSaveButton}  onClick={() => editValue && changeOptions(task, (item) => {item.title = editValue})}>Save</MyButton>
            </div>

        )
    } else {
        return (
            <div className={cl.taskContent}>
                <div className={taskTitle.join(' ')}>{task.title}</div>
                <div className={cl.task__buttons}>
                    <MyButton className={taskButton.join(' ')} color="red" onClick={() => removeTask(task)}>Delete</MyButton>
                    <MyButton className={taskButton.join(' ')} color="lightblue" onClick={() => editTask(task)}>Edit</MyButton>
                    {task.status
                        ? <MyButton className={taskButton.join(' ')} onClick={() => changeOptions(task, (item) => {item.status = !item.status})}>Undone</MyButton>
                        : <MyButton className={taskButton.join(' ')} onClick={() => changeOptions(task, (item) => {item.status = !item.status})}>Done</MyButton>
                    }


                </div>
            </div>
        )

    }


};

export default IsEdit;