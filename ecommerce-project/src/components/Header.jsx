import { NavLink } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-NavLink">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-NavLink header-NavLink" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-NavLink header-NavLink" to="checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
