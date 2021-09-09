import "./Login.css";

export const Login = () => {
    return (
        <div className="wrapperLogin fadeInDown">
            <div id="formContentLogin">
                <form action="http://localhost:3333/login" method="POST">
                    <input type="text" id="inputLogin" className="fadeIn firstLogin" name="email" placeholder="Login"></input>
                    <input type="password" id="inputPassword" className="fadeIn secondLogin" name="password" placeholder="Password"></input>
                    <input type="submit" id="inputSubmit" className="fadeIn thirdLogin" value="Log In"></input>
                </form>
            </div>
        </div>
    )
}