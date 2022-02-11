import React from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";

// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { ButtonStyled } from "../components/button/Button";
const Checkout = () => {
  return (
    <>
      <Container>
        <ShoppingCartContainer>
          <ShoppingTitle>Shopping Cart</ShoppingTitle>
          <DeselectItems>Deselect all items</DeselectItems>
          <PriceText>Price</PriceText>

          <ProductContainer>
            <Checkbox />
            <ProductImage
              src="https://m.media-amazon.com/images/I/61gKDJ5xnfL._AC_AA180_.jpg"
              alt=""
            ></ProductImage>
            <ProductInfoContainer>
              <ProductName>
                Razer Seiren V2 Pro Professional-Grade USB Microphone: Dynamic
                Microphone - High Pass Filter - Digital Analogue Limiter - Mic
                Monitoring/Gain & Mute Buttons - Built-in Shock Absorber & Mic
                Windsock
              </ProductName>
              <QtyStatus>In Stock</QtyStatus>

              <ProductActionContainer>
                <Select>
                  <Option value="0">Qty: 0</Option>
                  <Option value="1">Qty: 1</Option>
                  <Option value="2">Qty: 2</Option>
                  <Option value="3">Qty: 3</Option>
                  <Option value="4">Qty: 4</Option>
                  <Option value="5">Qty: 5</Option>
                  <Option value="6">Qty: 6</Option>
                  <Option value="7">Qty: 7</Option>
                  <Option value="8">Qty: 8</Option>
                  <Option value="9">Qty: 9</Option>
                  <Option value="10">10</Option>
                </Select>
                <DeleteButton>Delete</DeleteButton>
              </ProductActionContainer>
            </ProductInfoContainer>
            <ProductPrice>$149.99</ProductPrice>
          </ProductContainer>
          <ProductContainer>
            <Checkbox />
            <ProductImage
              src="https://m.media-amazon.com/images/I/81ACRfPHn-L._AC_AA180_.jpg"
              alt=""
            ></ProductImage>
            <ProductInfoContainer>
              <ProductName>
                Razer Seiren V2 Pro Professional-Grade USB Microphone: Dynamic
                Microphone - High Pass Filter - Digital Analogue Limiter - Mic
                Monitoring/Gain & Mute Buttons - Built-in Shock Absorber & Mic
                Windsock
              </ProductName>
              <QtyStatus>In Stock</QtyStatus>

              <ProductActionContainer>
                <Select>
                  <Option value="0">Qty: 0</Option>
                  <Option value="1">Qty: 1</Option>
                  <Option value="2">Qty: 2</Option>
                  <Option value="3">Qty: 3</Option>
                  <Option value="4">Qty: 4</Option>
                  <Option value="5">Qty: 5</Option>
                  <Option value="6">Qty: 6</Option>
                  <Option value="7">Qty: 7</Option>
                  <Option value="8">Qty: 8</Option>
                  <Option value="9">Qty: 9</Option>
                  <Option value="10">10</Option>
                </Select>
                <DeleteButton>Delete</DeleteButton>
              </ProductActionContainer>
            </ProductInfoContainer>
            <ProductPrice>$149.99</ProductPrice>
          </ProductContainer>
          <ProductContainer>
            <Checkbox />
            <ProductImage
              src="https://m.media-amazon.com/images/I/61gKDJ5xnfL._AC_AA180_.jpg"
              alt=""
            ></ProductImage>
            <ProductInfoContainer>
              <ProductName>
                Razer Seiren V2 Pro Professional-Grade USB Microphone: Dynamic
                Microphone - High Pass Filter - Digital Analogue Limiter - Mic
                Monitoring/Gain & Mute Buttons - Built-in Shock Absorber & Mic
                Windsock
              </ProductName>
              <QtyStatus>In Stock</QtyStatus>

              <ProductActionContainer>
                <Select>
                  <Option value="0">Qty: 0</Option>
                  <Option value="1">Qty: 1</Option>
                  <Option value="2">Qty: 2</Option>
                  <Option value="3">Qty: 3</Option>
                  <Option value="4">Qty: 4</Option>
                  <Option value="5">Qty: 5</Option>
                  <Option value="6">Qty: 6</Option>
                  <Option value="7">Qty: 7</Option>
                  <Option value="8">Qty: 8</Option>
                  <Option value="9">Qty: 9</Option>
                  <Option value="10">10</Option>
                </Select>
                <DeleteButton>Delete</DeleteButton>
              </ProductActionContainer>
            </ProductInfoContainer>
            <ProductPrice>$149.99</ProductPrice>
          </ProductContainer>

          <BottomSubtotalContainer>
            Subtotal(2 items): <span>$189.98</span>
          </BottomSubtotalContainer>
        </ShoppingCartContainer>

        <RightColContainer>
          <SubTotalContainer>
            <SubTotalPrice>
              Subtotal(2 items): <span>$189.98</span>
            </SubTotalPrice>
            <ButtonStyled
              paddingAll="0.5rem 2.7rem"
              border="none"
              borderRadius="0.6rem"
              width="100%"
            >
              Proceed to checkout
            </ButtonStyled>
          </SubTotalContainer>

          <ViewedItemContainer>
            <ViewedItemTitle>Your recently viewed items</ViewedItemTitle>
            <ItemContainer>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71e89sFEBRL._AC_UL100_SR100,100_.jpg"
                alt=""
              ></img>
              <ItemInfo>
                <div>
                  <ItemName>
                    Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic
                    Technology: Triforce Titanium 50mm Drivers - THX Spatial
                    Audio - Hybrid Fabric & Leatherette Memory Foam Cushions -
                    Detachable Mic
                  </ItemName>
                </div>
                <div>
                  <Rating name="read-only" value={3} readOnly />
                </div>
                <div>
                  <ItemPrice>$15.9</ItemPrice>
                </div>
                <div>
                  <ButtonStyled
                    paddingAll="0.4rem 1rem"
                    border="none"
                    borderRadius="0.6rem"
                    maxWidth="7rem"
                  >
                    Add to Cart
                  </ButtonStyled>
                </div>
              </ItemInfo>
            </ItemContainer>
            <ItemContainer>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71e89sFEBRL._AC_UL100_SR100,100_.jpg"
                alt=""
              ></img>
              <ItemInfo>
                <div>
                  <ItemName>
                    Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic
                    Technology: Triforce Titanium 50mm Drivers - THX Spatial
                    Audio - Hybrid Fabric & Leatherette Memory Foam Cushions -
                    Detachable Mic
                  </ItemName>
                </div>
                <div>
                  <Rating name="read-only" value={3} readOnly />
                </div>
                <div>
                  <ItemPrice>$15.9</ItemPrice>
                </div>
                <div>
                  <ButtonStyled
                    paddingAll="0.4rem 1rem"
                    border="none"
                    borderRadius="0.6rem"
                    maxWidth="7rem"
                  >
                    Add to Cart
                  </ButtonStyled>
                </div>
              </ItemInfo>
            </ItemContainer>
            <ItemContainer>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71e89sFEBRL._AC_UL100_SR100,100_.jpg"
                alt=""
              ></img>
              <ItemInfo>
                <div>
                  <ItemName>
                    Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic
                    Technology: Triforce Titanium 50mm Drivers - THX Spatial
                    Audio - Hybrid Fabric & Leatherette Memory Foam Cushions -
                    Detachable Mic
                  </ItemName>
                </div>
                <div>
                  <Rating name="read-only" value={3} readOnly />
                </div>
                <div>
                  <ItemPrice>$15.9</ItemPrice>
                </div>
                <div>
                  <ButtonStyled
                    paddingAll="0.4rem 1rem"
                    border="none"
                    borderRadius="0.6rem"
                    maxWidth="7rem"
                  >
                    Add to Cart
                  </ButtonStyled>
                </div>
              </ItemInfo>
            </ItemContainer>
          </ViewedItemContainer>
        </RightColContainer>
      </Container>
    </>
  );
};

const Select = styled.select`
  padding: 0.5rem;
  background-color: #eeeeee;
  border-radius: 0.5rem;
  border: 1px solid gray;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-top: 0.3rem;
  outline: none;
`;

const Option = styled.option``;

const Container = styled.div`
  width: 100wh;
  min-height: 93vh;
  display: grid;
  grid-template-columns: 3fr min(20rem);
  grid-template-rows: auto;
  padding: 1.5rem;
  gap: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const ShoppingCartContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ProductContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  ::before {
    content: "";
    height: 0.1px;
    background-color: #333e47;
    position: absolute;
    left: 0;
    right: 0;
    top: 5px;
    opacity: 0.2;
  }
`;

const BottomSubtotalContainer = styled.p`
  position: relative;
  width: 100%;
  text-align: right;
  font-size: 1.2rem;
  ::before {
    content: "";
    height: 0.1px;
    background-color: #333e47;
    position: absolute;
    left: 0;
    right: 0;
    top: -5px;
    opacity: 0.2;
  }

  span {
    font-weight: 700;
  }
`;

const ProductInfoContainer = styled.div`
  margin: 0 1rem;
`;
const RightColContainer = styled.div`
  /* border: 1px solid black;
    padding: 1rem;
    background-color: #ffffff; */
`;

const PriceText = styled.p`
  color: #333e47;
  width: 100%;
  text-align: right;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
`;

const ShoppingTitle = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
`;
const DeselectItems = styled.p`
  color: #007185;
`;

const SubTotalContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  max-height: 20rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  object-fit: scale-down;
`;

const ViewedItemContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.p`
  line-height: 1.4rem;
  margin-right: 5rem;
`;

const QtyStatus = styled.p`
  margin: 0.2rem 0;
  color: #007185;
`;

const ProductActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  border: none;
  color: #007185;
  background: transparent;
  margin-left: 1rem;
`;

const SubTotalPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;

  span {
    font-weight: 700;
  }
`;

const ViewedItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const ItemInfo = styled.p`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;
const ItemName = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 10rem;
  color: #007185;
`;
const ItemPrice = styled.p`
  color: #9f0047;
  font-weight: 500;
  font-size: 1rem;
`;

export default Checkout;
