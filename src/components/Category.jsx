import React from "react";
import styled from "styled-components";
const Category = () => {
  return (
    <>
      <CateCard>
        <CateTitle>Accessories & computer</CateTitle>
        <CateImage
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          alt=""
        ></CateImage>
        <CateButton>See more</CateButton>
      </CateCard>
    </>
  );
};

const CateCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  max-height: 500px;
  min-width: 100px;
  border-radius: 1px solid black;
  background-color: #ffffff;

  z-index: 1;
  margin: 0.5rem;
`;

const CateTitle = styled.h3`

`;

const CateImage = styled.img`
  margin: 1rem 0;
`;

const CateButton = styled.p``;

export default Category;
