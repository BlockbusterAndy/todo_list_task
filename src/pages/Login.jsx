import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, token } = useSelector((state) => state.auth);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(loginUser({ username, password }));

    if (token) {
      alert("Login successful");
      navigate("/dashboard");
    }
  };

  return (
    <section className="flex justify-center items-center h-[calc(100vh-96px)] bg-primaryBG-light dark:bg-primaryBG-dark">
      <div className="flex flex-col gap-4 p-8 bg-secondaryBG-light dark:bg-secondaryBG-dark rounded-lg md:w-1/4">
        <h2 className="text-3xl text-center text-primaryBG-dark dark:text-primaryBG-light">
          Login
        </h2>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-1xl text-primaryBG-dark dark:text-primaryBG-light">
              Username
            </p>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="p-2 rounded-md focus:outline-none bg-transparent border-2 border-green-700 text-primaryBG-dark dark:text-primaryBG-light"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-1xl text-primaryBG-dark dark:text-primaryBG-light">
              Password
            </p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="p-2 rounded-md focus:outline-none bg-transparent border-2 border-green-700 text-primaryBG-dark dark:text-primaryBG-light"
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white p-2 rounded-md"
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
          <Link
            to={"/register"}
            className="text-primaryBG-dark dark:text-primaryBG-light hover:text-blue-600 dark:hover:text-blue-600"
          >
            Don&apos;t have an account? Register.
          </Link>
          {error && <p className="text-red-600 py-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;
