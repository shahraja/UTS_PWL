import React, { useContext, useEffect, useState } from "react";
import * as AiIcon from "react-icons/ai";
import { ThemeContext } from "../context/themeContext";

const InputName = ({ placeholder, textColor, onChange, value }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineUser size={16} />
        <input
          onChange={onChange}
          style={{
            color: textColor,
          }}
          type="text"
          name="nama"
          id="nama"
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

const InputEmail = ({ placeholder, textColor, onChange, value }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineMail size={16} />
        <input
          onChange={onChange}
          style={{
            color: textColor,
          }}
          type="text"
          name="email"
          id="email"
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

const InputMsg = ({ textColor, onChange, value }) => {
  return (
    <>
      <div className="container full-height">
        <div className="input-field with icons">
        <AiIcon.AiOutlineShopping size={16} />
        <textarea
          onChange={onChange}
          style={{
            color: textColor,
          }}
          id="messages"
          name="messages"
          value={value}
       
          required
        ></textarea>
      </div>
      </div>
    </>
  );
};

const InputNomor = ({ placeholder, textColor, onChange, value }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlinePhone size={16} />
        <input
          onChange={onChange}
          style={{
            color: textColor,
          }}
          type="text"
          name="nomor"
          id="nomor"
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

const InputAlamat = ({ placeholder, textColor, onChange, value }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineHome size={16} />
        <input
          onChange={onChange}
          style={{
            color: textColor,
          }}
          type="text"
          name="alamat"
          id="alamat"
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

const InputComponent = ({ type, placeholder, onChange, value }) => {
  const { theme } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("#222831");
  useEffect(() => {
    theme === "light" ? setTextColor("#222831") : setTextColor("#EEE2DE");
  }, [theme]);
  return (
    <>
      {type === "name" ? (
        <InputName
          onChange={onChange}
          placeholder={placeholder}
          textColor={textColor}
          value={value}
        />
      ) : type === "email" ? (
        <InputEmail
          onChange={onChange}
          placeholder={placeholder}
          textColor={textColor}
          value={value}
        />
        ) : type === "nomor" ? (
          <InputNomor
            onChange={onChange}
            placeholder={placeholder}
            textColor={textColor}
            value={value}
          />
          ) : type === "alamat" ? (
            <InputAlamat
              onChange={onChange}
              placeholder={placeholder}
              textColor={textColor}
              value={value}
            />
      ) : type === "messages" ? (
        <InputMsg 
          onChange={onChange} 
          placeholder={placeholder} 
          textColor={textColor} 
          value={value} 
          />
      ) : (
        "Input type unspecified"
      )}
    </>
  );
};

export default InputComponent;