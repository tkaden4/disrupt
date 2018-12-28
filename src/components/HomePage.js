import React from "react";

import logo_light from "../../assets/disrupt-combined-light-tight.svg";
import bg from "../../assets/discord-wallpaper-repeatable.png";
import "./HomePage.sass";

import regionalize from "../transformers/Regionalize";

import MessageBox from "./MessageBox";
import Transformer from "./Transformer";

const samplePhrases = [
    "Hello!",
    "How's it goin?",
    "What's the dealio",
    "*notices bulge* OwO, what's this?"
];

const randomPhrase = () => samplePhrases[Math.floor(Math.random() * samplePhrases.length)];

const isWhiteSpace = (text) => text.trim() == '';

const updown = (text) => Array.from(text).map((e, i) => (i % 2 == 0 && !isWhiteSpace(e)) ? e.toUpperCase() : e).join("");

export const HomePage = () =>
    <div className="home-page">
        <div className="header" style={{ backgroundImage: `url(${bg})` }}>
            <div className="logo">
                <img src={logo_light} />
            </div>
        </div>
        <div className="container">
            <Transformer name="Regional Indicator" defaultContent={"Hello!"} transformer={regionalize} />
            <Transformer name="Mockcasing " defaultContent={"Stupid and arbitrary"} transformer={updown} />
        </div>
    </div>;

export default HomePage;
