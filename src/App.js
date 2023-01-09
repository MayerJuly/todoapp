import './App.css';
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import Container from "./components/Container/Container";
import IsTaskList from "./components/IsTaskList/IsTaskList";

function App() {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(
        localStorage.getItem("tasks") != null
            ?   JSON.parse(localStorage.getItem("tasks"))
            :   []
    )


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])

    }




  return (
    <div className="App">
        <Container>
            <Header/>
            <TaskForm
                create={createTask}
                value={value}
                setValue={setValue}
            />
            <IsTaskList
                tasks={tasks}
                setTasks={setTasks}
            />
        </Container>






    </div>
  );
}

export default App;
