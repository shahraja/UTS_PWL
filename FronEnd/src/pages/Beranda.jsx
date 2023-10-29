// component
import Header from "../components/Header";
import { Gunung } from "../components/Assets";
import { ThemeContext } from "../context/themeContext";
import { AddButton, MinButton, ResetButton } from "../components/Button";

// library
import React, { useContext, useState } from "react";
import { ScreenContext } from "../context/screenContenxt";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const { screenSize } = useContext(ScreenContext);
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    number > 0 ? setNumber(number - 1) : alert(`Number already ${number}`);
  };

  const resetNumber = () => {
    number === 0 ? alert(`Number already ${number}`) : setNumber(0);
  };

  return (
    <>
      <Header />
      <main className={theme}>
        <div
          className={`container ${
            screenSize > 1000
              ? "row flex-full"
              : screenSize > 600 && screenSize <= 1000
              ? "column"
              : "column full-width item-center"
          }`}
        >
          <div className="container row item-center">
            <Gunung />
            <div className="container column">
              <h1>Apa itu Pemandangan Alam?</h1>
              <p>
              Pemandangan alam adalah keindahan visual yang terjadi di alam bebas, termasuk berbagai elemen seperti gunung, danau, sungai, hutan, pantai, padang rumput, taman, dan lain-lain. Pemandangan alam sering kali menciptakan perasaan kagum dan kekaguman karena kecantikan alam yang tidak terkontaminasi oleh aktivitas manusia. Berikut adalah deskripsi tentang beberapa jenis pemandangan alam yang berbeda, seperti Pegunungan, Danau dan Sungai, Hutan dan Hutan Hujan, Pantai dan Pulau, Padang Rumput dan Savana, Taman Bunga.
              </p>
            </div>
          </div>
          <div className="container column full-width item-center minimal-gap">
            {/* <h1>Coba komponen full state dibawah</h1> */}
            {/* <div className="container column full-width item-auto-space">
              <div
                className={`container row ${
                  screenSize > 600 ? "half-width" : "full-width"
                }`} style={{
                  justifyContent : "center", gap : "40px"
                }}
              >
                <AddButton actions={increment} />
                <MinButton actions={decrement} />
              </div>
              <h1
                style={{
                  marginBottom: 20,
                }}
              >
                {number}
              </h1>
              <ResetButton actions={resetNumber} />
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
