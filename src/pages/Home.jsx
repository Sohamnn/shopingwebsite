// import ProductCart from "../components/Productcart";

// const products =[
//     { id : 1,name : "Shoes", price : 2000},
//     { id : 2, name : "Watch" , price : 5000}
// ];

// function Home() {
//     return (
//         <div>
//             <h1>Products</h1>
//             {products.map((p) => (
//                 <productcart key={p.id} product={p} />
//             ))}
//         </div>
//     );
// }

// export default Home;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/Productcard";

// const products = [
//   { id: 1, name: "Shoes", price: 2000 },
//   { id: 2, name: "Watch", price: 5000 },
//   { id: 3, name: "Phone", price: 15000 },
//   { id: 4, name: "Laptop", price: 60000 },
// ];

// function Home() {
//   return (
//     <div style={styles.container}>
//       <h1>Products</h1>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} />
//       ))}
//     </div>
//   );
// }

// const styles = {
//   container:{
//     display: "flex",
//     flexWrap: "Wrap",
//     gap: "20px",
//     padding: "20px",
//     justifyContent: "center",
//   },
// };
// export default Home;








//  claude code
import products from "../data/Products";
import ProductCard from "../components/Productcard";


const Products = [
  { id: 1, name: "Shoes", price: 2000, tag: "Bestseller", image:"/shoes.webp" },
  { id: 2, name: "Watch", price: 5000, tag: "New", image:"/watch.jpeg" },
  { id: 3, name: "Phone", price: 15000, tag: "New" , image:"/phone.webp"},
  { id: 4, name: "Laptop", price: 60000, tag: "Popular", image:"/Unknown.jpeg" },
];

const categories = ["All", "Footwear", "Accessories", "Electronics"];

function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          min-height: 100vh;
          background: #f7f4ef;
          font-family: 'Outfit', sans-serif;
          color: #1c1a17;
        }

        /* ── Hero Banner ── */
        .home-hero {
          background: #1c1a17;
          padding: 80px 60px 70px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          overflow: hidden;
          position: relative;
        }

        .home-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 380px; height: 380px;
          border-radius: 50%;
          border: 1px solid rgba(211,174,114,0.12);
        }

        .home-hero::after {
          content: '';
          position: absolute;
          top: 20px; right: 20px;
          width: 220px; height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(211,174,114,0.08);
        }

        .hero-left { max-width: 560px; }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d3ae72;
          font-weight: 500;
          margin-bottom: 20px;
          border: 1px solid rgba(211,174,114,0.3);
          padding: 5px 14px;
          border-radius: 100px;
        }

        .hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .hero-title em {
          font-style: italic;
          color: #d3ae72;
        }

        .hero-sub {
          font-size: 1rem;
          color: rgba(245,240,232,0.45);
          font-weight: 300;
          line-height: 1.7;
          max-width: 380px;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          flex-shrink: 0;
        }

        .hero-stat {
          text-align: right;
        }

        .hero-stat-num {
          font-family: 'Fraunces', serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #d3ae72;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245,240,232,0.3);
          margin-top: 2px;
        }

        .hero-stat-divider {
          width: 40px;
          height: 1px;
          background: rgba(211,174,114,0.2);
          margin-left: auto;
        }

        /* ── Filters ── */
        .filters-bar {
          padding: 28px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8e2d8;
          background: #f7f4ef;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .filter-tabs {
          display: flex;
          gap: 6px;
        }

        .filter-tab {
          padding: 7px 18px;
          border-radius: 100px;
          border: 1px solid transparent;
          background: transparent;
          font-family: 'Outfit', sans-serif;
          font-size: 0.83rem;
          font-weight: 400;
          color: #8a8278;
          cursor: pointer;
          transition: all 0.18s;
          letter-spacing: 0.3px;
        }

        .filter-tab:hover {
          color: #1c1a17;
          border-color: #d3ae72;
        }

        .filter-tab.active {
          background: #1c1a17;
          color: #f5f0e8;
          border-color: #1c1a17;
        }

        .product-count {
          font-size: 0.8rem;
          color: #a09890;
          font-weight: 300;
          letter-spacing: 1px;
        }

        /* ── Products Grid ── */
        .products-section {
          padding: 52px 60px 80px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        /* ── Featured strip ── */
        .featured-strip {
          background: #1c1a17;
          margin: 0 60px 52px;
          border-radius: 16px;
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          overflow: hidden;
          position: relative;
        }

        .featured-strip::after {
          content: '✦';
          position: absolute;
          right: 40px;
          font-size: 6rem;
          color: rgba(211,174,114,0.06);
          line-height: 1;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .strip-text h3 {
          font-family: 'Fraunces', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #f5f0e8;
          margin-bottom: 6px;
        }

        .strip-text p {
          font-size: 0.85rem;
          color: rgba(245,240,232,0.4);
          font-weight: 300;
        }

        .strip-btn {
          padding: 12px 28px;
          background: #d3ae72;
          color: #1c1a17;
          border: none;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.5px;
          transition: opacity 0.2s, transform 0.15s;
          flex-shrink: 0;
        }

        .strip-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .home-hero { padding: 60px 28px 50px; flex-direction: column; align-items: flex-start; }
          .hero-right { flex-direction: row; align-items: center; }
          .filters-bar { padding: 20px 24px; flex-wrap: wrap; gap: 12px; }
          .products-section { padding: 36px 24px 60px; }
          .featured-strip { margin: 0 24px 36px; }
        }
      `}</style>

      <div className="home-root">

        {/* Hero */}
        <section className="home-hero">
          <div className="hero-left">
            <span className="hero-eyebrow">New Collection · 2025</span>
            <h1 className="hero-title">
              Shop what<br /><em>moves you</em>
            </h1>
            <p className="hero-sub">
              Carefully curated products — from everyday essentials to
              statement pieces. Quality you can feel.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-stat">
              <div className="hero-stat-num">500+</div>
              <div className="hero-stat-label">Products</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">10K+</div>
              <div className="hero-stat-label">Customers</div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="filters-bar">
          <div className="filter-tabs">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`filter-tab${i === 0 ? " active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="product-count">{products.length} items</span>
        </div>

        {/* Featured strip */}
        <div className="featured-strip">
          <div className="strip-text">
            <h3>Free shipping on orders over ₹2,000</h3>
            <p>Limited time offer — don't miss out</p>
          </div>
          <button className="strip-btn">Shop Now</button>
        </div>

        {/* Products */}
        <section className="products-section">
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;


