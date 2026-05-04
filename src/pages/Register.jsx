import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("chickenhut_users") || "[]");
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setMsg("Email already registered.");
      return;
    }
    users.push(form);
    localStorage.setItem("chickenhut_users", JSON.stringify(users));
    setMsg("Registered successfully.");
    setTimeout(() => navigate("/login"), 700);
  };

  return (
    <section className="section auth-wrap">
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="auth-form">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          required
        />
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
        <button type="submit">Create Account</button>
      </form>
      {msg ? <p className="status-msg">{msg}</p> : null}
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Register;
