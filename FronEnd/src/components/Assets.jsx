import React from "react";
import gunung1 from "../assets/gunung1.jpg";
import gunung2 from "../assets/gunung2.jpg";
import gunung3 from "../assets/gunung3.jpg";
import gunung4 from "../assets/gunung4.jpg";
import gunung5 from "../assets/gunung5.jpg";

export const Gunung = ({ width }) => {
  return (
    <>
     
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={gunung1}
          alt="gunung1.jpg"
        />
      
    </>
  );
};
export const Gunung2 = () => {
  return (
    <>
      <img
        width = {300}
        src={gunung2}
        alt="gunung2.jpg"
      />
    </>
  );
};
export const Gunung3 = () => {
  return (
    <>
      <img
      width = {300}
        src={gunung3}
        alt="gunung3.jpg"
      />
    </>
  );
};
export const Gunung4 = () => {
  return (
    <>
      <img
        width = {300}
        src={gunung4}
        alt="gunung4.jpg"
      />
    </>
  );
};
export const Gunung5 = () => {
  return (
    <>
      <img
        width = {300}
        src={gunung5}
        alt="gunung5.jpg"
      />
    </>
  );
};