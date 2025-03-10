import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  useEffect(() => {
    document.title = "Sahulos | Register";
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 xs:flex-col lg:flex-row">
        <img 
            src="/logo.png" 
            alt="Logo"
            className="w-[20em] sm:w-30 md:w-30 lg:w-[26em] h-auto object-cover mb-[-2em] lg:ml-[-10em] lg:mr-[5em] xs:mb-[-7em] lg:mb-0" 
        />
        <form className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-3xl font-bold mb-4 flex justify-center">Register</h2>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            />
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            />
            <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            />
            <Link to="/login">
              <button type="submit" className="w-full bg-amber-900 text-white p-2 rounded">
                Register
              </button>
            </Link>
            <p className="mt-5 text-gray-400">Have a account?
            {' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login Here
              </Link>
            </p>
        </form>
    </div>
  );
}
