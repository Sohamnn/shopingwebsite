// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // 🔥 Load cart from localStorage on start
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart"));
//     if (savedCart) {
//       setCart(savedCart);
//     }
//   }, []);

//   // 🔥 Save cart whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);

//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, increaseQty, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartProvider;







// claude code

import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

// Custom hook for cleaner usage in components
export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Lazy initial state — runs once on mount, safer than useEffect
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {
      console.warn("Could not save cart to localStorage.");
    }
  }, [cart]);

  // Add item or increment quantity if already exists
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity by 1
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity by 1 — removes item if quantity reaches 0
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove an item entirely regardless of quantity
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Wipe the entire cart
  const clearCart = () => setCart([]);

  // Derived values — computed once here, available everywhere
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;