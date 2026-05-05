
// import {Link} from "react-router-dom";
// function Navbar() {
//   return (
//     <>
//       <nav style={styles.nav}>

//         <h2 style={styles.link}>My Store</h2>

//         <input type="text" placeholder="Search product..." style={styles.search} />
//         <div style={styles.link}>
//           <Link to="/" style={styles.link}>Home</Link>
//           <Link to="/cart" style={styles.link}>Cart</Link>
//           <Link to="/contact" style={styles.link} >Contact </Link>
//           <Link to="/about" style={styles.link}>About</Link>       
//         </div>
//       </nav>
//     </>
//   );

// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#333",
//     color: "#fff",

//   },

//   search: {
//     padding: "8px",
//     borderRadius: "5px",
//     border: "none",
//     width : "300px"
//   },
  
//   links: {
//     display: "flex",
    
//   },
//   link:{
//     color: "#fff",
//     padding: "15px",
//     textDecoration: "none",
//     frontWeight: "bold",
//   },
// }
// export default Navbar;







// claude code

import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar() {
  const { totalItems } = useCart();
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,600&family=Outfit:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 68px;
          background: #18160f;
          border-bottom: 1px solid rgba(207,166,89,0.12);
          font-family: 'Outfit', sans-serif;
          gap: 24px;
        }

        /* ── Logo ── */
        .navbar-logo {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 1.5rem;
          font-weight: 600;
          color: #cfa659;
          text-decoration: none;
          letter-spacing: -0.3px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── Search ── */
        .navbar-search-wrap {
          flex: 1;
          max-width: 360px;
          position: relative;
        }

        .navbar-search-wrap svg {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(244,239,230,0.3);
          pointer-events: none;
        }

        .navbar-search {
          width: 100%;
          padding: 9px 16px 9px 40px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(207,166,89,0.15);
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.87rem;
          color: #f4efe6;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .navbar-search::placeholder { color: rgba(244,239,230,0.28); }

        .navbar-search:focus {
          border-color: rgba(207,166,89,0.45);
          background: rgba(255,255,255,0.09);
        }

        /* ── Links ── */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 400;
          color: rgba(244,239,230,0.55);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 100px;
          letter-spacing: 0.3px;
          transition: color 0.18s, background 0.18s;
          position: relative;
        }

        .nav-link:hover {
          color: #f4efe6;
          background: rgba(255,255,255,0.06);
        }

        .nav-link.active {
          color: #cfa659;
          background: rgba(207,166,89,0.1);
          font-weight: 500;
        }

        /* ── Cart button ── */
        .cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: #cfa659;
          color: #18160f;
          border-radius: 100px;
          text-decoration: none;
          font-size: 0.87rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          margin-left: 8px;
          transition: opacity 0.18s, transform 0.15s;
          white-space: nowrap;
        }

        .cart-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .cart-badge {
          background: #18160f;
          color: #cfa659;
          font-size: 0.68rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 680px) {
          .navbar { padding: 0 20px; gap: 12px; }
          .navbar-search-wrap { max-width: 160px; }
          .nav-link { display: none; }
          .nav-link.cart-btn { display: flex; }
        }
      `}</style>

      <nav className="navbar">

        {/* Logo */}
        <Link className="navbar-logo" to="/">My Store</Link>

        {/* Search */}
        <div className="navbar-search-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            className="navbar-search"
            type="text"
            placeholder="Search products…"
          />
        </div>

        {/* Nav links */}
        <div className="navbar-links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${pathname === to ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}

          <Link to="/cart" className="cart-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Cart
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>

      </nav>
    </>
  );
}

export default Navbar;