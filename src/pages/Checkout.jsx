// claude code

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", pincode: "",
    payment: "cod",
  });

  const [placed, setPlaced] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    if (!form.phone.trim())   e.phone   = "Phone is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim())    e.city    = "City is required";
    if (!form.pincode.trim()) e.pincode = "Pincode is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setPlaced(true);
    clearCart();
  };

  const shipping = totalPrice > 2000 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .co-root {
          min-height: 100vh;
          background: #f7f4ef;
          font-family: 'Outfit', sans-serif;
          color: #1c1a17;
          padding: 60px 40px;
        }

        .co-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #a09585;
          cursor: pointer;
          border: none;
          background: none;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 36px;
          transition: color 0.18s;
          padding: 0;
        }
        .co-back:hover { color: #1c1a17; }

        .co-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          margin-bottom: 40px;
          color: #1c1a17;
        }
        .co-title em { font-style: italic; color: #cfa659; }

        .co-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        /* ── Form ── */
        .co-form-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid #ede8e1;
          overflow: hidden;
        }

        .co-section {
          padding: 32px;
          border-bottom: 1px solid #f0ebe3;
        }
        .co-section:last-child { border-bottom: none; }

        .co-section-title {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #cfa659;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .co-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .co-field { display: flex; flex-direction: column; gap: 6px; }
        .co-field.full { grid-column: 1 / -1; }

        .co-label {
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #7a6f65;
          font-weight: 600;
        }

        .co-input {
          padding: 12px 16px;
          border: 1.5px solid #e6dfd5;
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem;
          color: #1c1a17;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
          background: #faf8f5;
        }
        .co-input::placeholder { color: #c4b9ae; }
        .co-input:focus {
          border-color: #cfa659;
          box-shadow: 0 0 0 3px rgba(207,166,89,0.1);
          background: #fff;
        }
        .co-input.err { border-color: #e05555; }
        .co-err-msg { font-size: 0.75rem; color: #e05555; margin-top: 2px; }

        /* Payment options */
        .pay-options { display: flex; flex-direction: column; gap: 10px; }

        .pay-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border: 1.5px solid #e6dfd5;
          border-radius: 12px;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s;
          background: #faf8f5;
        }
        .pay-option.selected {
          border-color: #cfa659;
          background: rgba(207,166,89,0.06);
        }

        .pay-option input[type="radio"] { accent-color: #cfa659; width: 16px; height: 16px; }

        .pay-label { font-size: 0.92rem; font-weight: 500; color: #1c1a17; }
        .pay-sub { font-size: 0.78rem; color: #a09585; font-weight: 300; margin-top: 1px; }

        .pay-icon { font-size: 1.3rem; margin-left: auto; }

        /* ── Summary ── */
        .co-summary {
          background: #1c1a17;
          border-radius: 20px;
          padding: 32px;
          position: sticky;
          top: 32px;
          color: #f4efe6;
        }

        .summary-title {
          font-family: 'Fraunces', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #f4efe6;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(207,166,89,0.15);
        }

        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
          max-height: 240px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .summary-items::-webkit-scrollbar { width: 3px; }
        .summary-items::-webkit-scrollbar-thumb { background: rgba(207,166,89,0.3); border-radius: 10px; }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .item-img {
          width: 48px; height: 48px;
          background: rgba(255,255,255,0.07);
          border-radius: 8px;
          object-fit: contain;
          padding: 4px;
          flex-shrink: 0;
        }

        .item-name {
          font-size: 0.88rem;
          color: #f4efe6;
          font-weight: 400;
          line-height: 1.3;
          flex: 1;
        }

        .item-qty {
          font-size: 0.75rem;
          color: rgba(244,239,230,0.4);
        }

        .item-price {
          font-size: 0.9rem;
          color: #cfa659;
          font-weight: 500;
          white-space: nowrap;
        }

        .summary-rows { display: flex; flex-direction: column; gap: 10px; }

        .s-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(244,239,230,0.5);
          font-weight: 300;
        }

        .s-row.total {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f4efe6;
          margin-top: 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(207,166,89,0.15);
        }
        .s-row.total span:last-child { color: #cfa659; font-family: 'Fraunces', serif; font-size: 1.4rem; }

        .free-ship {
          font-size: 0.75rem;
          color: #6bbf6b;
          font-weight: 500;
        }

        .place-btn {
          width: 100%;
          margin-top: 24px;
          padding: 16px;
          background: linear-gradient(135deg, #cfa659 0%, #b8832d 100%);
          color: #18160f;
          border: none;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s;
          box-shadow: 0 4px 20px rgba(207,166,89,0.3);
        }
        .place-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(207,166,89,0.4); }
        .place-btn:active { transform: translateY(0); }

        /* ── Success ── */
        .success-page {
          min-height: 100vh;
          background: #f7f4ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          padding: 40px;
        }

        .success-card {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #ede8e1;
          padding: 64px 56px;
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .success-ring {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(207,166,89,0.1);
          border: 2px solid #cfa659;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 24px;
          color: #cfa659;
        }

        .success-title {
          font-family: 'Fraunces', serif;
          font-size: 2.2rem;
          color: #1c1a17;
          margin-bottom: 12px;
        }

        .success-sub {
          font-size: 0.95rem;
          color: #a09585;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 32px;
        }

        .success-detail {
          background: #f7f4ef;
          border-radius: 12px;
          padding: 20px 24px;
          text-align: left;
          margin-bottom: 32px;
        }

        .success-detail p {
          font-size: 0.85rem;
          color: #7a6f65;
          margin-bottom: 6px;
          display: flex;
          justify-content: space-between;
        }

        .success-detail p span { color: #1c1a17; font-weight: 500; }

        .success-home {
          padding: 14px 32px;
          background: #1c1a17;
          color: #f4efe6;
          border: none;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s, transform 0.15s;
        }
        .success-home:hover { background: #cfa659; color: #1c1a17; transform: translateY(-1px); }

        @media (max-width: 820px) {
          .co-grid { grid-template-columns: 1fr; }
          .co-root { padding: 40px 20px; }
          .co-summary { position: static; }
          .co-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {placed ? (
        <div className="success-page">
          <div className="success-card">
            <div className="success-ring">✓</div>
            <h1 className="success-title">Order Placed!</h1>
            <p className="success-sub">
              Thank you, {form.name}! Your order has been confirmed and will be
              delivered to {form.city} within 3–5 business days.
            </p>
            <div className="success-detail">
              <p>Email confirmation <span>{form.email}</span></p>
              <p>Payment <span>{form.payment === "cod" ? "Cash on Delivery" : "Online Payment"}</span></p>
              <p>Order total <span>₹{grandTotal.toLocaleString("en-IN")}</span></p>
            </div>
            <button className="success-home" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="co-root">
          <button className="co-back" onClick={() => navigate("/cart")}>
            ← Back to Cart
          </button>

          <h1 className="co-title">
            Secure <em>Checkout</em>
          </h1>

          <div className="co-grid">
            {/* Form */}
            <form className="co-form-card" onSubmit={handleSubmit}>

              {/* Contact */}
              <div className="co-section">
                <p className="co-section-title">Contact Information</p>
                <div className="co-row">
                  <div className="co-field">
                    <label className="co-label">Full Name</label>
                    <input className={`co-input${errors.name ? " err" : ""}`} name="name" placeholder="Rahul Sharma" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="co-err-msg">{errors.name}</span>}
                  </div>
                  <div className="co-field">
                    <label className="co-label">Phone</label>
                    <input className={`co-input${errors.phone ? " err" : ""}`} name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    {errors.phone && <span className="co-err-msg">{errors.phone}</span>}
                  </div>
                  <div className="co-field full">
                    <label className="co-label">Email</label>
                    <input className={`co-input${errors.email ? " err" : ""}`} name="email" type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="co-err-msg">{errors.email}</span>}
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="co-section">
                <p className="co-section-title">Delivery Address</p>
                <div className="co-row">
                  <div className="co-field full">
                    <label className="co-label">Street Address</label>
                    <input className={`co-input${errors.address ? " err" : ""}`} name="address" placeholder="123, MG Road, Flat 4B" value={form.address} onChange={handleChange} />
                    {errors.address && <span className="co-err-msg">{errors.address}</span>}
                  </div>
                  <div className="co-field">
                    <label className="co-label">City</label>
                    <input className={`co-input${errors.city ? " err" : ""}`} name="city" placeholder="Mumbai" value={form.city} onChange={handleChange} />
                    {errors.city && <span className="co-err-msg">{errors.city}</span>}
                  </div>
                  <div className="co-field">
                    <label className="co-label">Pincode</label>
                    <input className={`co-input${errors.pincode ? " err" : ""}`} name="pincode" placeholder="400001" value={form.pincode} onChange={handleChange} />
                    {errors.pincode && <span className="co-err-msg">{errors.pincode}</span>}
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="co-section">
                <p className="co-section-title">Payment Method</p>
                <div className="pay-options">
                  {[
                    { value: "cod",    label: "Cash on Delivery", sub: "Pay when your order arrives", icon: "💵" },
                    { value: "upi",    label: "UPI / GPay / PhonePe", sub: "Instant payment via UPI", icon: "📱" },
                    { value: "card",   label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay", icon: "💳" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`pay-option${form.payment === opt.value ? " selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={opt.value}
                        checked={form.payment === opt.value}
                        onChange={handleChange}
                      />
                      <div>
                        <p className="pay-label">{opt.label}</p>
                        <p className="pay-sub">{opt.sub}</p>
                      </div>
                      <span className="pay-icon">{opt.icon}</span>
                    </label>
                  ))}
                </div>
              </div>

            </form>

            {/* Summary */}
            <div className="co-summary">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-items">
                {cart.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <img className="item-img" src={item.image || "/shoes.webp"} alt={item.title || item.name} />
                    <div className="item-name">
                      {item.title || item.name}
                      <p className="item-qty">Qty: {item.quantity}</p>
                    </div>
                    <span className="item-price">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>

              <div className="summary-rows">
                <div className="s-row">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="s-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="free-ship">FREE</span> : `₹${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="s-row">
                    <span style={{fontSize:"0.75rem", color:"rgba(244,239,230,0.35)"}}>
                      Add ₹{(2000 - totalPrice).toLocaleString("en-IN")} more for free shipping
                    </span>
                  </div>
                )}
                <div className="s-row total">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button className="place-btn" onClick={handleSubmit}>
                Place Order →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;