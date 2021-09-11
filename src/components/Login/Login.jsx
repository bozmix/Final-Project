import "./Login.css";
import "../../services/getToken";
import { useState } from 'react';


export const Login = ({ changeLogIn }) => {

    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");

    const emailInput = (event) => {
        setEmailInputValue(event.target.value)
    }

    const passwordInput = (event) => {
        setPasswordInputValue(event.target.value)
    }

    const submitEmailAndPass = () => {


        
        if (emailInputValue === "dev@dev.com" && passwordInputValue === "developer") {
            localStorage.setItem("userLoggedIn#10394e1", true)
            changeLogIn()
            console.log("SUBMITTTT")
        }
    }

    return (
        <div className="wrapperLogin fadeInDown">
            <div id="formContentLogin">
                <div>
                    <input type="text" id="inputLogin" className="fadeIn firstLogin" name="email" placeholder="Login" onChange={emailInput}></input>
                    <input type="password" id="inputPassword" className="fadeIn secondLogin" name="password" placeholder="Password" onChange={passwordInput}></input>
                    <button type="submit" onClick={submitEmailAndPass} id="inputSubmit" className="fadeIn thirdLogin" value="Log In">Log In</button>
                </div>
            </div>
        </div>
    )
}