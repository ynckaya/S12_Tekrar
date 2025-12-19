import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";


function App() {

  return (
    <TaskProvider> 
      <div className="container">
        <TaskForm/>
      </div>
    </TaskProvider>
  )
}

export default App
