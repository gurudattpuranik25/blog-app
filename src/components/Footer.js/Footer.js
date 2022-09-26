import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className=" footer__section flex items-center justify-center gap-8 py-6 shadow-xl">
      <span>copyright &copy; 2022 - Gurudatt Puranik</span>
      <div className=" flex gap-4">
        <i
          className="fa-brands fa-instagram cursor-pointer text-2xl"
          style={{
            color:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          }}
          onClick={() =>
            (window.location = "https://www.instagram.com/gurudatt_puranik/")
          }
        ></i>
        <i
          className="fa-brands fa-facebook-f cursor-pointer text-2xl"
          style={{ color: "#4267B2" }}
          onClick={() =>
            (window.location = "https://www.facebook.com/gurudatt.puranik.25")
          }
        ></i>
        <i
          className="fa-brands fa-twitter cursor-pointer text-2xl"
          style={{ color: "#1DA1F2" }}
          onClick={() =>
            (window.location = "https://twitter.com/PuranikGurudatt")
          }
        ></i>
        <i
          className="fa-brands fa-linkedin-in cursor-pointer text-2xl"
          style={{ color: "#0077b5" }}
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/gurudatt-puranik-0933b0195/")
          }
        ></i>
        <i
          className="fa-brands fa-github cursor-pointer text-2xl"
          style={{ color: "#171515" }}
          onClick={() =>
            (window.location = "https://github.com/gurudattpuranik25")
          }
        ></i>
      </div>
    </div>
  );
}

export default Footer;
