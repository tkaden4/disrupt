import React from "react";

import logo_light from "../../assets/disrupt-combined-light-tight.svg";
import bg from "../../assets/discord-wallpaper-repeatable.png";
import "./HomePage.sass";

import regionalize from "../transformers/Regionalize";
import mock from "../transformers/Mock";
import aesthetic from "../transformers/Aesthetic";

import Transformer from "./Transformer";

export const HomePage = () => (
  <div className="home-page">
    <div className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="logo">
        <img src={logo_light} />
      </div>
    </div>
    <div className="container">
      <Transformer name="Regional Indicator" defaultContent={"Hello!"} transformer={regionalize} />
      <Transformer name="Mockcasing " defaultContent={"Stupid and arbitrary"} transformer={mock} />
      <Transformer name="A E S T H E T I C" defaultContent={"SUCC"} transformer={aesthetic} />
    </div>
  </div>
);

export default HomePage;
