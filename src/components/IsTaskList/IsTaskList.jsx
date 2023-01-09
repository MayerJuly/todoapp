import React from 'react';
import TaskList from "../TaskList/TaskList";
import cl from "./IsTaskList.module.css"

const IsTaskList = ({tasks, setTasks}) => {

    if(tasks.length) {
        return (
            <TaskList
                tasks={tasks}
                setTasks={setTasks}
            />
        );
    } else {
        return (
            <h2 className={cl.textEmpty}>
                Task list is empty
            </h2>
        );
    }


};

export default IsTaskList;