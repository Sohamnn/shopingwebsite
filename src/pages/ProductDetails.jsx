
// import { useParams} from "react-router-dom";

// function ProductDetails() {
//     const {id} = useParams();
//     return (
//         <div>
//             <h1>Product Details</h1>
//             <p>Product ID: {id}</p>
//         </div>
//     );
// }

// export default ProductDetails;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/Products";
// import axios from "axios";

function ProductDetails() {
  // const { id } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => setProduct(res.data))
  //     .catch((err) => console.log(err));
  // }, [id]);

   const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt="product" style={styles.image} />

      <div>
        <h1>{product.title}</h1>
        <p style={styles.price}>₹{product.price}</p>
        <p>{product.description}</p>
        <p><b>Category:</b> {product.category}</p>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
  },
  image: {
    width: "300px",
  },
  price: {
    color: "#16a34a",
    fontSize: "22px",
    fontWeight: "bold",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
  },
};

export default ProductDetails;