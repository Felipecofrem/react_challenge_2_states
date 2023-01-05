import React, { useState } from "react";
import Button from "./components/Boton"
import Input from "./components/Input"

const App = () => {
const [password, setPassword] = useState ("");

    return (

      <>
        <Input placeHolder="Ingrese nombre" typeInput="text" title="Nombre"/>
        <Input placeHolder="Ingrese password" typeInput="password" title="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}/>

        {password === "252525" ? (<Button />) : null} 
      </>
)}
export default App