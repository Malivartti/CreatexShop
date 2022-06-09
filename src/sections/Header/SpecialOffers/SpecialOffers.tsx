import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.sass";
import "swiper/css";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArray } from "../../../img/icons/Chevrons/Left-chevron.svg";
import { ReactComponent as RightArray } from "../../../img/icons/Chevrons/Right-chevron.svg";
import specialOffers from "../../../data/specialOffers";

const SpecialOffers: React.FC = () => {
  return (
    <div className="speacialOffers">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
          nextEl: ".speacialOffers__array-left",
          prevEl: ".speacialOffers__array-right",
        }}
        loop={!!true}
        autoplay={{
          delay: 5000,
        }}
      >
        {specialOffers.map((offer) => (
          <SwiperSlide className="speacialOffers__slide" key={offer.id}>
            <button
              className="btn-reset speacialOffers__array-right"
              type="button"
            >
              <LeftArray className="speacialOffers__array" />
            </button>
            <div className="speacialOffers__text">
              {offer.text}{" "}
              <Link className="speacialOffers__link" to={offer.to}>
                {offer.link}
              </Link>
            </div>
            <button
              className="btn-reset speacialOffers__array-left"
              type="button"
            >
              <RightArray className="speacialOffers__array" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
