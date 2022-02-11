import styled from "styled-components";

export const AddToCartButton = styled.button`
  background-color: #ffe093;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
`;

export const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth}; 
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFCA0B"};
  color: "#333E47";
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => props.borderRadius};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding: ${(props) => props.paddingAll};
  border: ${(props) => props.border};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
