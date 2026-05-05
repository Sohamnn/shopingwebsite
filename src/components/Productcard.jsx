// import {Link} from "react-router-dom";

// function ProductCart({product}){
//     return (
//         <div>
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//         </div>
//     );
// }

// export default ProductCart;

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { addToCart } = useContext(CartContext);
//   return (
//     <div style={styles.card}>
//       <img src="/shoes.webp" alt="shoes" style={styles.image} />
//        <h3>{product.title}</h3>
//       <p style={styles.price}>₹{product.price}</p>

//       <Link to={`/product/${product.id}`}>
//         <button style={styles.button}>View</button>
//       </Link>
//       <button onClick={() => addToCart(product)} style={styles.button}>Add to cart</button>
//     </div>
//   );
// }

// const styles ={
//  card: {
//     border: "1px solid #ddd",
//     padding: "15px",
//     width: "200px",
//     borderRadius: "10px",
//     textAlign: "center",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//   },

//   image: {
//     width: "100%"
//   },
//   button: {
//     margine: "10px",
//     padding : "8px",
//     width: "100%",
//     border : "none",
//     borderRadius: "6px",
//     backgroungColor: "#851432",
//     color: "white",
//     cursor: "pointer",
//   }
// };

// export default ProductCard;





// claude code

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500&display=swap');

        .p-card {
          font-family: 'Outfit', sans-serif;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid #ede8e1;
          transition: transform 0.22s, box-shadow 0.22s;
        }

        .p-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(28,22,15,0.1);
        }

        .p-img-wrap {
          position: relative;
          background: #f7f4ef;
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }

        .p-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform 0.4s ease;
        }

        .p-card:hover .p-img-wrap img {
          transform: scale(1.06);
        }

        .p-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #18160f;
          color: #cfa659;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .p-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 6px;
        }

        .p-name {
          font-family: 'Fraunces', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #18160f;
          line-height: 1.25;
        }

        .p-price {
          font-size: 1rem;
          font-weight: 500;
          color: #cfa659;
          letter-spacing: 0.3px;
        }

        .p-actions {
          display: flex;
          gap: 8px;
          margin-top: 14px;
        }

        .btn-view {
          flex: 1;
          padding: 10px;
          border: 1.5px solid #ede8e1;
          background: transparent;
          border-radius: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #18160f;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: border-color 0.18s, background 0.18s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-view:hover {
          border-color: #18160f;
          background: #f7f4ef;
        }

        .btn-add {
          flex: 2;
          padding: 10px 14px;
          border: none;
          border-radius: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.4px;
          transition: background 0.18s, transform 0.12s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .btn-add.idle {
          background: #18160f;
          color: #f4efe6;
        }

        .btn-add.idle:hover {
          background: #cfa659;
          color: #18160f;
          transform: translateY(-1px);
        }

        .btn-add.added {
          background: rgba(207,166,89,0.12);
          color: #cfa659;
          border: 1.5px solid rgba(207,166,89,0.35);
          cursor: default;
        }
      `}</style>

      <div className="p-card">
        <div className="p-img-wrap">
          <img
            src={product.image || "/shoes.webp"}
            alt={product.title || product.name}
          />
          {product.tag && <span className="p-tag">{product.tag}</span>}
        </div>

        <div className="p-body">
          <h3 className="p-name">{product.title || product.name}</h3>
          <p className="p-price">₹{product.price?.toLocaleString("en-IN")}</p>

          <div className="p-actions">
            <Link className="btn-view" to={`/product/${product.id}`}>
              View
            </Link>
            <button
              className={`btn-add ${inCart ? "added" : "idle"}`}
              onClick={() => !inCart && addToCart(product)}
            >
              {inCart ? "✓ Added" : "+ Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;