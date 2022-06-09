import React from "react";
import "./index.sass";
import { Link } from "react-router-dom";
import { special, clothes, shoesh, accessories } from "../../../data/megamenu";
import Child from "../../../img/child.jpg";
import Button from "../../../components/Button/Button";
import { ReactComponent as ArrowIcon } from "../../../img/icons/Arrows/Right.svg";

interface MegamenuProps {
  isShow: null | string;
  closeMenu: () => void;
}

const Megamenu: React.FC<MegamenuProps> = ({ isShow, closeMenu }) => {
  if (!isShow) {
    return null;
  }

  return (
    <div
      className="megamenu"
      onClick={() => closeMenu()}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
    >
      <div
        className="megamenu__content"
        onClick={(e) => e.stopPropagation()}
        onKeyPress={() => {}}
        role="button"
        tabIndex={-1}
      >
        <div className="container megamenu__container">
          <div className="megamenu__categories">
            <div className="megamenu__list">
              {special.map((category) => (
                <Link className="megamenu__item" to="catalog">
                  {category}
                </Link>
              ))}
            </div>
            <div className="megamenu__list">
              <h2 className="megamenu__title">Clothes</h2>
              {clothes.map((category) => (
                <Link className="megamenu__item" to="catalog">
                  {category}
                </Link>
              ))}
            </div>
            <div className="megamenu__list">
              <h2 className="megamenu__title">Shoesh</h2>
              {shoesh.map((category) => (
                <Link className="megamenu__item" to="catalog">
                  {category}
                </Link>
              ))}
            </div>
            <div className="megamenu__list">
              <h2 className="megamenu__title">Accessories</h2>
              {accessories.map((category) => (
                <Link className="megamenu__item" to="catalog">
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <div className="megamenu__specialOffer">
            <img
              className="megamenu__specialOffer-img"
              src={Child}
              alt="child"
            />
            <div className="megamenu__specialOffer-text">
              Back to school. Sale up to 50%
            </div>
            <Button variant="outline" padding={24} onClick={() => {}}>
              See offers <ArrowIcon className="megamenu__specialOffer-icon" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
