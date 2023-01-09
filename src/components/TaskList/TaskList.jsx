import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import cl from "./TaskList.module.css"

const TaskList = ({tasks, setTasks}) => {
    return (
        <div className={cl.taskList}>
            {tasks.map((task,index) =>
                <TaskItem
                    key={task.id}
                    tasks={tasks}
                    setTasks={setTasks}
                    task={task}
                    index={index}
                />
            )}

        </div>
    );
};

export default TaskList;