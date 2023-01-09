import React from 'react';

import cl from "./TaskItem.module.css"
import IsEdit from "../IsEdit/IsEdit";


const TaskItem = ({tasks, setTasks, index, task}) => {




    return (
        <div className={cl.task__item}>
            <div className={cl.task__number}>{index + 1}.</div>

            <IsEdit
                tasks={tasks}
                task={task}
                setTasks={setTasks}
            />




        </div>
    );
};

export default TaskItem;