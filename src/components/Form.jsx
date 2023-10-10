import React, {useState} from 'react';
import "./Form.css"
import {validation} from "../validation"

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
        console.log("a")
    }


    return (
        <div className="divForm">
           
            <form>
            <h1>Rick and Morty</h1>
            
            <h2>Iniciar sesion</h2>
            <div className="divEmail">
                <label htmlFor="email"></label>
                <input 
                    className="email"
                    type="text" 
                    name="email"
                    placeholder="email"
                    value={userData.email} 
                    onChange={handleChange}   
                />
                <p className="error">{errors.email}</p>  
            </div>

            <div className="divPassword">
                <label htmlFor="password"></label>
                <input 
                    className="password"
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={userData.password} 
                    onChange={handleChange}   
                />
                <p className="error">{errors.password}</p>    
            </div>

            <div className="divbutton">
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            

        </form>
        </div>
      );
}

export default Form;