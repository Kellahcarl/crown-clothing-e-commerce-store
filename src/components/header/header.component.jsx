import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          shop
        </Link>
        {currentUser ? (
          <div className="option" onclick={() => {}}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect()(Header);
