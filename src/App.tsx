import './App.css'
import PaginationComponent from "./components/PaginationComponent/PaginationComponent.tsx";
import UsersComponent from "./components/UsersComponent/UsersComponent.tsx";

const App = () => {
  return (
    <>
      <PaginationComponent/>
        <hr/>
        <UsersComponent/>
    </>
  )
}

export default App
