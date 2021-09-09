import "./Login.css";

export const Login = () => {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"></input>
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"></input>
                    <input type="submit" class="fadeIn fourth" value="Log In"></input>
                </form>
            </div>
        </div>
    )
}