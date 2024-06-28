import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

export default function Footer ()  {
  return (
    <footer className={style.footer}>
      <ul className={style.social}>
        <li>Mail</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Facebook</li>
      </ul>
      <p>Desde 29/05/2024</p>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://static.vecteezy.com/ti/vetor-gratis/t2/8214517-abstract-geometric-logo-or-infinity-line-logo-for-your-company-gratis-vetor.jpg"} 
          alt="Logo"
        />
      </div>
    </footer>
  );
};

