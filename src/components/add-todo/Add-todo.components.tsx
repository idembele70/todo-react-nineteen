import Logo from "./Logo.components";
import Today from "./Today.components";
import AddTodoForm from "./add-todo-form/Add-todo-form.components";
import AlertMessagePopUp from "./alert-message-pop-up/Alert-message-pop-up.components";

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