import React, { FC } from "react";
import wifi from "../styles/images/wifi.svg";
import rating from "../styles/images/rating.svg";
import parking from "../styles/images/Частная парковка.svg";
import restourant from "../styles/images/ресторан.svg";
import li1 from "../styles/images/+11.svg";
import li from "../styles/images/i1.png";
import heartIcon from "../../styles/images/heart__icon.svg";

interface ITourProps {
  photo: string;
  plusses: string[];
  city: string;
  price: number;
  rate: number;
}

const PrimaryTour: FC<ITourProps> = ({ photo, city, plusses, price, rate }) => {
  const imgContainer = document.querySelector<HTMLDivElement>(
    ".stars"
  ) as HTMLDivElement;

  imgContainer;

  return (
    <div className="col-4" style={{ minWidth: "380px" }}>
      <div className="card d-flex">
        <div className="rating d-flex align-items-center justify-content-center">
          {rate}
        </div>
        <img src={photo} className="image__card" />
        <div className="d-flex align-items-center justify-content-end">
          <div className="city d-flex align-self-center w-50 d-flex justify-content-center">
            {city}
          </div>
          <div className="stars d-flex align-items-center gap-2"></div>
        </div>
        <div className="info__card">
          <div className="naming__container d-flex justify-content-between">
            <div className="naming">
              Название города
              <br />
              Экскурсия по городу <br />
              Посещение музея
              <br />
            </div>
            <div className="food__refound">
              <p className="text-success">
                Бесплатная отмена
                <br />
                Питание включено
              </p>
            </div>
          </div>
          <div className="icons__card">
            {plusses.map((e) => (
              <img src={e} />
            ))}
          </div>
          <div className="buttons__card d-flex justify-content-around">
            <div className="button__buy">
              <button type="button" className="btn btn-warning">
                <span>от {price} ₽</span>
                <br />
                <span className="old__price">
                  <s>от 6 000 ₽</s> 10%
                </span>
                <div className="icon d-flex align-items-center justify-content-start">
                  <img
                    className="icon__btn"
                    src="assets/images/arrow-bez-palochki.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div className="liked">
              <button type="button" className="">
                <img src={heartIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryTour;
