import React, { useState, createContext, useEffect } from "react";
import { db } from "../config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
