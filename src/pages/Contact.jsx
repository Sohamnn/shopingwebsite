// function contact(){
//     return(
//         <div style={styles.container}>
//             <h1>Contact Us</h1>
//             <p>Have questions? Reach out to us!</p>
            
//             <form>
//                 <input type="text" placeholder="Your Name"  />
//                 <input type="email" placeholder="Your email" />

//                 <button type="submit" >
//                     send message
//                 </button>
//             </form>
            
//         </div>
//     );
// }

// const styles={
//     container: {
//     padding: "30px",
//     textAlign: "center",
//   },
// }
// export default contact;


// claud code

import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: "✉", label: "Email", value: "hello@mystore.com" },
    { icon: "☎", label: "Phone", value: "+91 98765 43210" },
    { icon: "◎", label: "Location", value: "Mumbai, India" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Nunito:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .contact-root {
          min-height: 100vh;
          background: #f9f6f1;
          font-family: 'Nunito', sans-serif;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ── Left Panel ── */
        .contact-left {
          background: #18160f;
          padding: 80px 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .contact-left::before {
          content: '';
          position: absolute;
          bottom: -100px; left: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(207,166,89,0.1);
        }

        .contact-left::after {
          content: '';
          position: absolute;
          bottom: -40px; left: -40px;
          width: 240px; height: 240px;
          border-radius: 50%;
          border: 1px solid rgba(207,166,89,0.07);
        }

        .left-top { position: relative; z-index: 1; }

        .contact-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #cfa659;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .contact-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          color: #f4efe6;
          line-height: 1.1;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .contact-title em {
          font-style: italic;
          color: #cfa659;
        }

        .contact-desc {
          font-size: 0.97rem;
          line-height: 1.8;
          color: rgba(244,239,230,0.45);
          font-weight: 300;
          max-width: 340px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(207,166,89,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          color: #cfa659;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(244,239,230,0.3);
          font-weight: 500;
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 0.95rem;
          color: #f4efe6;
          font-weight: 400;
        }

        /* ── Right Panel ── */
        .contact-right {
          padding: 80px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-heading {
          font-family: 'DM Serif Display', serif;
          font-size: 1.9rem;
          color: #18160f;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .form-sub {
          font-size: 0.88rem;
          color: #a09585;
          font-weight: 300;
          margin-bottom: 40px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7a6f65;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          background: #fff;
          border: 1.5px solid #e6dfd5;
          border-radius: 10px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          color: #18160f;
          font-weight: 400;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #c4b9ae;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #cfa659;
          box-shadow: 0 0 0 3px rgba(207,166,89,0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          margin-top: 8px;
          background: #18160f;
          color: #f4efe6;
          border: none;
          border-radius: 10px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::after {
          content: '→';
          margin-left: 8px;
          transition: transform 0.2s;
          display: inline-block;
        }

        .submit-btn:hover {
          background: #cfa659;
          color: #18160f;
          transform: translateY(-1px);
        }

        .submit-btn:hover::after { transform: translateX(4px); }
        .submit-btn:active { transform: translateY(0); }

        /* ── Success ── */
        .success-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 16px;
          padding: 40px 0;
        }

        .success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(207,166,89,0.12);
          border: 1.5px solid #cfa659;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: #cfa659;
          margin-bottom: 8px;
        }

        .success-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.9rem;
          color: #18160f;
          font-weight: 400;
        }

        .success-text {
          font-size: 0.95rem;
          color: #a09585;
          font-weight: 300;
          line-height: 1.7;
          max-width: 300px;
        }

        .success-back {
          margin-top: 12px;
          padding: 10px 24px;
          border: 1.5px solid #e6dfd5;
          background: transparent;
          border-radius: 100px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.83rem;
          color: #7a6f65;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }

        .success-back:hover { border-color: #cfa659; color: #18160f; }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .contact-root { grid-template-columns: 1fr; }
          .contact-left { padding: 60px 32px; }
          .contact-right { padding: 60px 32px; }
          .contact-left::before,
          .contact-left::after { display: none; }
        }
      `}</style>

      <div className="contact-root">

        {/* Left */}
        <div className="contact-left">
          <div className="left-top">
            <p className="contact-eyebrow">Get in touch</p>
            <h1 className="contact-title">
              We'd love to<br /><em>hear from you</em>
            </h1>
            <p className="contact-desc">
              Have a question, feedback, or just want to say hello?
              Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-info-list">
            {contactInfo.map((item) => (
              <div className="info-item" key={item.label}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <p className="info-label">{item.label}</p>
                  <p className="info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          {submitted ? (
            <div className="success-wrap">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Message sent!</h2>
              <p className="success-text">
                Thanks for reaching out, {form.name}. We'll reply to{" "}
                <strong>{form.email}</strong> within 24 hours.
              </p>
              <button className="success-back" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="form-heading">Send us a message</h2>
              <p className="form-sub">We reply within 24 hours, always.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="submit-btn" type="submit">
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </>
  );
}

export default Contact;