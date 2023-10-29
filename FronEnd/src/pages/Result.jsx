import React, { useContext } from "react";
import dataDump from "../dump/data.dump";
import { ThemeContext } from "../context/themeContext";

const Result = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={theme}>
        <h1>Daftar Pesanan Saya</h1>
        {dataDump.length === 0 ? (
          <div className="container flex-full center item-center">
            <p
              style={{
                fontSize: 32,
              }}
            >
              Belum ada pesanan
            </p>
          </div>
        ) : (
          <div
            className="container column full-width minimal-gap"
            style={{
              gap: 20,
            }}
          >
            {dataDump?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="container column center full-width minimal-gap messages-container"
                >
                  <div
                    className="container row item-auto-space"
                    style={{
                      fontSize: 12,
                    }}
                  >
                    <p className=" container column flex-full">
                      <b>{item.nama}</b> <i>{`${item.email}`}</i> {item.nomor} <br />{item.alamat}
                      <br /><br />Pesanan :
                    </p>
                    <p
                      className="flex-full"
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {item.sendAt}
                    </p>
                  </div>
                  <div className="container">
                    <p>{item.messages}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default Result;