import './App.css'
import {FC} from "react";
import TodoComponents from "./components/TodoComponents/TodoComponents.tsx";
import FamilyComponent from "./components/FamilyComponent/FamilyComponent.tsx";
import TodosDummyComponent from "./components/TodosDummyComponent/TodosDummyComponent.tsx";

const App: FC = () => {
    return (
        <>
            <FamilyComponent />
            <TodoComponents />
            <TodosDummyComponent />
        </>
    )
}

export default App
