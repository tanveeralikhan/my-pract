import { useRef } from "react";

function Login() {
  const password = useRef();
  const username = useRef();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: username?.current?.value,
      email: username.current.value,
      password: password.current.value,
    };
    alert(
      `Name: ${data.username} Email: ${data.email} Password: ${data.password}`
    );
  };
  return (
    <>
      <div className="log__bg">
        <div className="login">
          <div className="loginWrapper">
            <div className="loginRight">
              <form className="loginBox" onSubmit={handleClick}>
                <input
                  placeholder="Email, phone, or username"
                  type="text"
                  required
                  ref={username}
                />
                <input
                  placeholder="Password"
                  type="password"
                  required
                  minLength="6"
                  ref={password}
                />
                <button className="loginButton" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
