import { CSSProperties } from "react"

export default function Logo() {
   const style: CSSProperties = {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 10,
      textAlign: 'center'
   };
   
   return <h1 style={style}>Todo List</h1>
}