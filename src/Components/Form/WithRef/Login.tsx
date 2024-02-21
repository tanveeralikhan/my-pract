import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const password = useRef<HTMLInputElement>();
  const username = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: username?.current?.value,
      password: password?.current?.value,
    };
    navigate("/slidingImage", { state: true });
  };
  return (
    <>
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
    </>
  );
}

export default Login;
