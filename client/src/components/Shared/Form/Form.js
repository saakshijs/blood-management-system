import React,{useState} from "react";
import InputType from "./InputType";

const Form =() => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    return(
        <div>
<form >
    <h1 className="text-center">LoginPage</h1>
    <hr/>
     <InputType labelText={'email'} labelFor={'forEmail'} inputType={'email'} name={'email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
     <InputType labelText={'password'} labelFor={'forPassword'} inputType={'password'} name={'password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
</form>
        </div>
    )
}

export default Form;