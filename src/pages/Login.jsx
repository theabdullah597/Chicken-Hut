import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("chickenhut_users") || "[]");
    const found = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );
    if (!found) {
      setMsg("Invalid email or password.");
      return;
    }
    localStorage.setItem("chickenhut_current_user", JSON.stringify(found));
    setMsg("Login successful.");
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <section className="section auth-wrap">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="auth-form">
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {msg ? <p className="status-msg">{msg}</p> : null}
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}

export default Login;
