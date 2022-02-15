import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Header = () => {
  return (
    <>
      <div className="header">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
        <span className="header__locaitonIcon">
          <LocationOnIcon></LocationOnIcon>
        </span>
        <div className="header__option">
          <span className="header__optionLineOne">Diliver to:</span>
          <span className="header__optionLineTwo">Vietnam</span>
        </div>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello:</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your-</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </>
  );
};

export default Header;
