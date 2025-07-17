import AddTodoForm from "./AddTodoForm/AddTodoForm";
import MessagePopUp from "./MessagePopUp/MessagePopUp";
import Logo from "./Logo";
import Today from "./Today";

export default function AddTodo() {
  return (
    <>
      <Logo />
      <div >
        <Today />
        <MessagePopUp />
        <AddTodoForm />
      </div>
    </>
  )
}