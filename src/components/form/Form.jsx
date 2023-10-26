import React, {useState} from 'react';
import css from "./Form.module.css"
import {validation} from "../../validation"

function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange=(e)=>{
        const value = e.target.value
        const property = e.target.name
        setUserData({...userData, [property]:value})
        setErrors(validation({...userData, [property]:value}))
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.login(userData)
        
    }
    
    
    return (
        <div className={css.divForm}>
           
            <h1 className={css.h1Form} >Rick and Morty</h1>
            
            <form>
            <h2>Inicia sesion</h2>
            <div className={css.divEmail}>
                
                <input 
                    className={css.email}
                    type="text" 
                    name="email"
                    placeholder="email"
                    value={userData.email} 
                    onChange={handleChange}   
                />
            </div>
                <p className="error">{errors.email}</p>  

            <div className={css.divPassword}>
                
                <input 
                    className={css.password}
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={userData.password} 
                    onChange={handleChange}   
                />
            </div>
                <p className="error">{errors.password}</p>    

            <div className="divbutton">
            <button className={css.button} type="submit" onClick={handleSubmit}>Iniciar</button>
            </div>
            
        </form>
        
        </div>
      );
}

export default Form;