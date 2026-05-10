import React, { useState } from "react";
import { loginUser } from "../api/user.api";
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/slice/authSlice.js'
import { useNavigate } from "@tanstack/react-router"
const LoginForm = ({ state }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await loginUser(email, password)
            dispatch(login(data.user))
            navigate({ to: "/dashboard" })

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {/* New Register Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <span
                        onClick={() => state(false)}
                        className="text-blue-500 hover:underline"
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
