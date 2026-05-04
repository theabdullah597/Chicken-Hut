import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

const RESTAURANT_EMAIL = "contact@chickenhutuk.com";
const RESTAURANT_PHONE = "01539 732111";

function buildMailtoUrl({ toEmail, subject, body }) {
  const qs = new URLSearchParams({
    subject: subject || "Order request from website",
    body: body || ""
  });
  return `mailto:${toEmail}?${qs.toString()}`;
}

function Contact() {
  const location = useLocation();
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("Order request from website");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selectedItem = location.state?.selectedItem;
    if (selectedItem) {
      setSubject(`Order request: ${selectedItem}`);
      setMessage(`Hi, I would like to place an order for:\n- ${selectedItem}\n\nDelivery Address: 10 Finkle St, Kendal LA9 4AB`);
    }
  }, [location.state]);

  const sendMail = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const fd = new FormData(form.current);
      const fromName = String(fd.get("from_name") || "");
      const fromEmail = String(fd.get("from_email") || "");
      const phone = String(fd.get("phone") || "");

      const body =
        `Name: ${fromName}\n` +
        `Email: ${fromEmail}\n` +
        `Phone: ${phone}\n\n` +
        `${message}`;

      setStatus("Email service is not configured in the website yet. Opening your email app...");
      window.location.assign(
        buildMailtoUrl({ toEmail: RESTAURANT_EMAIL, subject, body })
      );
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setStatus("Order request sent successfully.");
      form.current.reset();
      setSubject("Order request from website");
      setMessage("");
    } catch (error) {
      setStatus("Failed to send order request. Please try again.");
    }
  };

  return (
    <section className="section auth-wrap">
      <h2>Contact &amp; Place Order</h2>
      <p>
        Fill this form to place your order. It sends directly to Chicken Hut.
      </p>

      <div className="contact-info">
        <h3>Contact Us Directly</h3>
        <p>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${RESTAURANT_PHONE}`}>{RESTAURANT_PHONE}</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${RESTAURANT_EMAIL}`}>{RESTAURANT_EMAIL}</a>
        </p>
        <p>
          <strong>Address:</strong> 10 Finkle St, Kendal LA9 4AB
        </p>
      </div>

      <hr />

      <h3>Order via Form</h3>
      <form ref={form} onSubmit={sendMail} className="auth-form">
        <input name="from_name" placeholder="Full name" required />
        <input
          type="email"
          name="from_email"
          placeholder="Email address"
          required
        />
        <input name="phone" placeholder="Phone number" required />
        <input
          name="subject"
          placeholder="Order subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Write your order items, quantity and full address"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Order</button>
      </form>
      {status ? <p className="status-msg">{status}</p> : null}
    </section>
  );
}

export default Contact;
