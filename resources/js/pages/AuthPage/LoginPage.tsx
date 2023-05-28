import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LogForm from "../../components/Auth/Login/LogForm";

const LoginPage: FC = () => {
  return (
      <div className="main__form__container">
        <LogForm />
      </div>
  );
};

export default LoginPage;
