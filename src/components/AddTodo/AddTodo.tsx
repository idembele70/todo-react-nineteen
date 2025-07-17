import Logo from "./Logo";
import Today from "./Today";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import AlertMessagePopUp from "./AlertMessagePopUp/AlertMessagePopUp";

export default function AddTodo() {
  
  return (
    <>
      <Logo />
      <div >
        <Today />
        <AlertMessagePopUp />
        <AddTodoForm />
      </div>
    </>
  )
}