import React from "react";
import "./index.sass";
import { ReactComponent as ProfileIcon } from "../../../img/icons/Basic/Profile.svg";

const TopBar: React.FC = () => {
  const logIn = () => {
    console.log("logIn");
  };

  const register = () => {
    console.log("register");
  };

  return (
    <div className="topbar">
      <div className="container topbar__container">
        <div className="topbar__available">
          Available 24/7 at{" "}
          <a className="topbar__tel" href="tel:4055550128">
            (405) 555-0128
          </a>
        </div>
        <ol className="list-reset topbar__menu">
          <li className="topbar__menu-item">Delivery & returns</li>
          <li className="topbar__menu-item">Track order</li>
          <li className="topbar__menu-item">Blog</li>
          <li className="topbar__menu-item">Contacts</li>
        </ol>
        <div className="topbar__interaction">
          <select className="currency">
            <option value="dollar" className="currency__item">
              Eng / $
            </option>
            <option value="rubble" className="currency__item">
              Rub / ₽
            </option>
          </select>
          <div className="account">
            <ProfileIcon className="account__icon" />
            <button className="btn-reset" type="button" onClick={logIn}>
              Log in
            </button>{" "}
            /{" "}
            <button className="btn-reset" type="button" onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
