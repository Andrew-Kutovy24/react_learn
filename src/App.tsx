import './App.css'
import {FC} from "react";
import CarsComponent from "./components/CarsComponent/CarsComponent.tsx";
import FormComponent from "./components/FormComponent/FormComponent.tsx";

const App:FC = () => {
  return (
    <>
        <FormComponent />
        <CarsComponent/>
    </>
  )
}

export default App
