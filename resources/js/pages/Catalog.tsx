import React, { FC } from "react";
import heartIcon from "../styles/images/heart__icon.svg";
import wifi from "../styles/images/wifi.svg";
import securityPay from "../styles/images/безопасная оплата.svg";
import dfs1 from "../styles/images/dfs1.png";
import yourTour from "../styles/images/тур только ваш.svg";
import whyUs from "../styles/images/почему именно мы.svg";
import clientCare from "../styles/images/забота о наших клиентах.svg";
import rating from "../styles/images/rating.svg";
import parking from "../styles/images/Частная парковка.svg";
import restourant from "../styles/images/ресторан.svg";
import li1 from "../styles/images/+11.svg";
import li from "../styles/images/i1.png";
import libig from "../styles/images/nutrition.svg";
import PrimaryTour from "../components/TourCard/PrimaryTour";

const Catalog: FC = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="banner d-flex" style={{ marginTop: "53px;" }}>
          <div className="col d-flex align-items-center justify-content-center">
            <p className="text-light bannertext">
              Развитие
              <br />
              Российского
              <br />
              туризма
            </p>
          </div>
          <div className="col">
            <img
              src={dfs1}
              alt=""
              className="imgbanner img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container feature">
        <div className="row">
          <div className="col text-center">
            <img src={securityPay} />
            <hr />
            Безопасная оплата
            <br />
            <b>Бронируйте туры через нашу надежную платежную систему</b>
          </div>
          <div className="col text-center">
            <img src={whyUs} />
            <hr />
            Почему именно мы
            <br />
            <b>
              Уникальный маршут тура, построенный на Ваших предпочтениях и
              пожеланиях
            </b>
          </div>
          <div className="col text-center">
            <img src={yourTour} />
            <hr />
            Тур только Ваш
            <br />
            <b>
              Мы подберем тур, подходящий исключительно под интересы Вас и
              Вашего окружения
            </b>
          </div>
          <div className="col text-center">
            <img src={clientCare} />
            <hr />
            Забота о наших клиентах
            <br />
            <b>
              Наша задача - обеспечить безопасность и комфорт для наших клиентов
            </b>
          </div>
        </div>
      </div>

      <div className="h1tours container d-flex justify-content-center ">
        <h1>Выбрать готовый тур</h1>
      </div>
      <div className="container ">
        <div className="row flex-wrap justify-content-center">
          <PrimaryTour city={'Podolsk'} rate={3} price={3990} photo={li1} plusses={[parking, wifi, yourTour, heartIcon]} />
          <PrimaryTour city={'Podolsk'} rate={3} price={3990} photo={li1} plusses={[parking, wifi, yourTour, heartIcon]} />
          <PrimaryTour city={'Podolsk'} rate={3} price={3990} photo={li1} plusses={[parking, wifi, yourTour, heartIcon]} />
          <PrimaryTour city={'Podolsk'} rate={3} price={3990} photo={li1} plusses={[parking, wifi, yourTour, heartIcon]} />
          <PrimaryTour city={'Podolsk'} rate={3} price={3990} photo={li1} plusses={[parking, wifi, yourTour, heartIcon]} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
