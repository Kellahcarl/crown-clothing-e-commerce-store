import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => {
  let user = {
    id: "1",
    data: "logged in",
  };
  return {
    dispatch: () => {
      dispatch(setCurrentUser(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(App);
