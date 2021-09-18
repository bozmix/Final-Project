import "./Login.css";
import "../../Services/getToken";
import { useState } from 'react';
import { getToken } from "../../Services/getToken";


export const Login = ({ changeLogIn }) => {

    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [wrongUsernameOrPassword, setWrongUsernameOrPassword] = useState(false);

    const emailInput = (event) => {
        setEmailInputValue(event.target.value)
    }


    const passwordInput = (event) => {
        setPasswordInputValue(event.target.value)
    }


    const submitEmailAndPass = () => {
        if (emailInputValue.includes('@') && passwordInputValue.length >= 6) {
/*             localStorage.setItem("userLoggedIn#10394e1", true)

 */            
            setWrongUsernameOrPassword(false);
getToken(emailInputValue, passwordInputValue)
                .then(token => {
                    localStorage.setItem('tokenNibble', token);
                    changeLogIn(true);
                }).catch(err => console.log(err))
            setWrongUsernameOrPassword(false)
        } else {
            setWrongUsernameOrPassword(true)
        }
    }


    const loginByPressingEnter = (event) => {
        if (event.key === 'Enter') {
            submitEmailAndPass()
        }
    }


    return (
        <div className="wrapperLogin fadeInDown">
            <div id="formContentLogin">
                <div>
                    {wrongUsernameOrPassword ? <div className="text-danger fw-bold">Wrong username or password</div> : null}
                    <input type="text" id="inputLogin" className="fadeIn firstLogin" name="email" placeholder="Login" onChange={emailInput} onKeyPress={loginByPressingEnter}></input>
                    <input type="password" id="inputPassword" className="fadeIn secondLogin" name="password" placeholder="Password" onChange={passwordInput} onKeyPress={loginByPressingEnter}></input>
                    <button type="submit" onClick={submitEmailAndPass} id="inputSubmit" className="fadeIn thirdLogin" value="Log In">Log In</button>
                </div>
            </div>
        </div>
    )
}