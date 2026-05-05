// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cart, increaseQty, decreaseQty } = useContext(CartContext);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div style={styles.container}>
//       <h1>Your Cart</h1>

//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           <div style={styles.grid}>
//             {cart.map((item) => (
//               <div key={item.id} style={styles.card}>
//                 <img
//                   src={item.image || "/shoes.webp"}
//                   alt="product"
//                   style={styles.image}
//                 />

//                 <h3>{item.title || item.name}</h3>
//                 <p>₹{item.price}</p>

//                 <div style={styles.qty}>
//                   <button onClick={() => decreaseQty(item.id)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => increaseQty(item.id)}>+</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h2 style={styles.total}>Total: ₹{total}</h2>
//         </>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     textAlign: "center",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   card: {
//     padding: "15px",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   image: {
//     width: "100%",
//     height: "150px",
//     objectFit: "contain",
//   },
//   qty: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "10px",
//     marginTop: "10px",
//   },
//   total: {
//     marginTop: "20px",
//   },
// };

// export default Cart;






// claud code

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cart-root {
          min-height: 100vh;
          background: #0f0e0e;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(212,163,89,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(212,163,89,0.05) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          color: #f0ede8;
          padding: 60px 40px;
        }

        .cart-header {
          max-width: 1100px;
          margin: 0 auto 48px;
          display: flex;
          align-items: baseline;
          gap: 16px;
          border-bottom: 1px solid rgba(212,163,89,0.2);
          padding-bottom: 24px;
        }

        .cart-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: #f0ede8;
          letter-spacing: -0.5px;
        }

        .cart-count {
          font-size: 0.85rem;
          font-weight: 500;
          color: #d4a359;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .cart-empty {
          max-width: 1100px;
          margin: 100px auto;
          text-align: center;
        }

        .cart-empty-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          opacity: 0.4;
        }

        .cart-empty h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #f0ede8;
          margin-bottom: 10px;
        }

        .cart-empty p {
          color: rgba(240,237,232,0.4);
          font-size: 1rem;
        }

        .cart-body {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 800px) {
          .cart-body { grid-template-columns: 1fr; }
          .cart-root { padding: 40px 20px; }
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cart-card {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: 20px;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,163,89,0.12);
          border-radius: 16px;
          padding: 20px;
          transition: border-color 0.2s, background 0.2s;
        }

        .cart-card:hover {
          border-color: rgba(212,163,89,0.3);
          background: rgba(255,255,255,0.05);
        }

        .cart-card img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          padding: 8px;
        }

        .card-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #f0ede8;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .card-price {
          font-size: 1.15rem;
          font-weight: 500;
          color: #d4a359;
          letter-spacing: 0.3px;
        }

        .card-subtotal {
          font-size: 0.78rem;
          color: rgba(240,237,232,0.35);
          margin-top: 4px;
          font-weight: 300;
        }

        .qty-control {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(212,163,89,0.35);
          background: transparent;
          color: #d4a359;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s, border-color 0.15s, transform 0.1s;
          line-height: 1;
        }

        .qty-btn:hover {
          background: rgba(212,163,89,0.15);
          border-color: #d4a359;
          transform: scale(1.08);
        }

        .qty-btn:active { transform: scale(0.95); }

        .qty-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #f0ede8;
          min-width: 20px;
          text-align: center;
        }

        .cart-summary {
          position: sticky;
          top: 40px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,163,89,0.15);
          border-radius: 20px;
          padding: 32px;
        }

        .summary-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #f0ede8;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(212,163,89,0.15);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 0.9rem;
          color: rgba(240,237,232,0.55);
          font-weight: 300;
        }

        .summary-row.total {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(212,163,89,0.15);
          font-size: 1.25rem;
          font-weight: 500;
          color: #f0ede8;
        }

        .summary-row.total span:last-child {
          color: #d4a359;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
        }

        .checkout-btn {
          width: 100%;
          margin-top: 24px;
          padding: 16px;
          background: linear-gradient(135deg, #d4a359 0%, #b8832d 100%);
          color: #0f0e0e;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(212,163,89,0.25);
        }

        .checkout-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(212,163,89,0.35);
        }

        .checkout-btn:active { transform: translateY(0); }

        .continue-link {
          display: block;
          text-align: center;
          margin-top: 14px;
          font-size: 0.82rem;
          color: rgba(240,237,232,0.35);
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.15s;
        }

        .continue-link:hover { color: rgba(240,237,232,0.65); }
      `}</style>

      <div className="cart-root">
        <div className="cart-header">
          <h1 className="cart-title">Your Cart</h1>
          {cart.length > 0 && (
            <span className="cart-count">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛍️</div>
            <h2>Nothing here yet</h2>
            <p>Add some items to get started.</p>
          </div>
        ) : (
          <div className="cart-body">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-card">
                  <img
                    src={item.image || "/shoes.webp"}
                    alt={item.title || item.name}
                  />
                  <div className="card-info">
                    <h3>{item.title || item.name}</h3>
                    <p className="card-price">₹{item.price.toLocaleString("en-IN")}</p>
                    <p className="card-subtotal">
                      Subtotal: ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="qty-control">
                    <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => decreaseQty(item.id)}>−</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
              <span className="continue-link">Continue Shopping</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
