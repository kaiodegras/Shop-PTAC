import React from "react";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://th.bing.com/th/id/OIP.-J2jESFPeaLSggnkPSoXFwHaHa?rs=1&pid=ImgDetMain"} 
          alt="Logo da loja"
        />
      </div>
      <p className={style.marketing}>A melhor loja de roupas .</p>
      <div className={style.Icon}>
      <button className={style.Button}>Adiciona novo produto</button>
      
        <Image
          width={70}
          height={48}
          src={"https://static.vecteezy.com/system/resources/previews/019/660/726/non_2x/shopping-cart-icon-on-transparent-background-free-png.png"}
        />
      </div>
    </header>
  );
};


