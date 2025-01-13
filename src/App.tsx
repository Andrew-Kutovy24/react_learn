import './App.css'
import {FC} from "react";
import {TodoComponents} from "./components/TodoComponents/TodoComponents.tsx";
import {DummyComponents} from "./components/DummyComponents/DummyComponents.tsx";

const App:FC = () => {
  return (
    <>
        <main>
            <div>
                <h2>Task 1:</h2>
                <TodoComponents/>
            </div>
            <div>
                <h2>Task 2:</h2>
                <DummyComponents/>
            </div>
        </main>
    </>
  )
}

export default App
