import React, { useState, useEffect } from "react";
import "./Home.css";
// import styled from "styled-components";
import Product from "./Product";
import { db } from "../config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CategorySlider from "./CategorySlider";
import Category from "./Category";
// import { ProductContext } from "../helper/ProductContext";

const Home = () => {
  // const [products, setProducts] = useContext(ProductContext);

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
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />

          <div className="home__row">
            {products &&
              products.map((item) => {
                return (
                  <Product
                    key={item.id}
                    title={item.name}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                  />
                );
              })}
          </div>
          <div className="home__row">
            <Category />
            <Category />
            <Category />
            <Category />
          </div>

          <CategorySlider></CategorySlider>

          {/* <CateContainer>
            {products &&
              products.map((item) => {
                return <CateImage src={item.image} alt=""></CateImage>;
              })}
            {products &&
              products.map((item) => {
                return <CateImage src={item.image} alt=""></CateImage>;
              })}
            {products &&
              products.map((item) => {
                return <CateImage src={item.image} alt=""></CateImage>;
              })}
            {products &&
              products.map((item) => {
                return <CateImage src={item.image} alt=""></CateImage>;
              })}
          </CateContainer> */}
        </div>
      </div>
    </>
  );
};

// const CateContainer = styled.div`
//   max-width: 100rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffffff;
//   margin: 0.5rem 1rem;
//   overflow: scroll;
//   padding: 2rem;

//   /* ::-webkit-scrollbar{
//     display: none;
//   } */
// `;

// const CateImage = styled.img`
//   max-width: 12rem;
//   max-height: 12rem;
//   object-fit: contain;
//   cursor: pointer;
// `;

export default Home;
