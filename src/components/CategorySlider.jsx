import React, {useEffect } from "react";
// import { db } from "../config/FirebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import styled from "styled-components";


const ProductSlider = () => {
  // const [setProducts] = useState([]);
  // const productCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      // const data = await getDocs(productCollectionRef);
      // setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <>
      {/* <Carousel
        // ssr
        // partialVisbile
        // deviceType={deviceType}
        // itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, 5).map((image) => {
          return (
            <Image
              // draggable={false}
              style={{ width: "100%", height: "100%" }}
              src={image}
            />
          );
        })}
      </Carousel> */}
    </>
  );
};

// const Image = styled.img`
//   cursor: pointer;
//   /* width: 10rem; */
// `;

// const Item = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #00008b;
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;

export default ProductSlider;

// import React, { useState, useEffect } from "react";
// import Product from "./Product";
// import { db } from "../config/FirebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import styled from "styled-components";

// const ProductSlider = () => {
//   const [products, setProducts] = useState([]);
//   const productCollectionRef = collection(db, "products");

//   useEffect(() => {
//     const getProducts = async () => {
//       const data = await getDocs(productCollectionRef);
//       setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getProducts();
//   }, []);

//   return (
//     <>
//       {products &&
//         products.map((item) => {
//           return <Image src={item.image} alt="" />;
//         })}
//     </>
//   );
// };

// const Image = styled.img`
//   cursor: pointer;
// `;

// export default ProductSlider;
