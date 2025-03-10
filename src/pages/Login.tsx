import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Login() {
  useEffect(() => {
      document.title = "Sahulos | Login";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 xs:flex-col lg:flex-row">
      <img 
        src="/logo.png" 
        alt="Logo"
        className="w-[20em] sm:w-30 md:w-30 lg:w-[26em] h-auto object-cover mb-[-2em] lg:ml-[-10em] lg:mr-[5em] xs:mb-[-6em] lg:mb-0" 
      />
      <form className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Link to="/">
          <button type="submit" className="w-full bg-amber-900 text-white p-2 rounded">
            Login
          </button>
        </Link>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <p className="mt-5 text-gray-400">
          Not a member?{" "}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Create a new account
          </Link>
        </p>
      </form>
    </div>
  );
}
