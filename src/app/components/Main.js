"use client"
import { useEffect,useState } from "react";
import Image from "next/image";
import style from "../page.module.css";
import Spinner from "./Spinner";


export default function Main() {
  const [listProduct, setProduct] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);
  const orderAz=() =>{
  let listAux = [...listProduct].sort((a, b) =>
    a.title.localeCompare(b.title));
    setProduct(listAux)
  }

  const orderKa=() =>{
    let listAux =[...listProduct].sort((a,b)=>
    a.title.localeCompare(b.title) );
    listAux = listAux.reverse();
    setProduct(listProduct);
  }
  const ordePZa=() =>{
    const listAux =[...listProduct].sort((a,b)=> a.price.localeCompare(b.price) );
    setProduct(listAux)

  }
  return (
    <>
      <div className={"styles.filter"}>
        <div>
        <button onClick={ordePZa}></button>
        <button onClick={orderAz}>Za</button>
        <button onClick={orderKa}>Az</button>
        </div>
      </div>
      <main className={style.body}>
        {listProduct.map((product) => (
          <div className={style.card} key={product.id}>
            <h1 className={style.title}>{product.title.slice(0, 16) + "..."}</h1>
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.title}
              className={style.image}
            />
            <h3 className={style.price}>R$: {product.price}</h3>
            <p className={style.description}>{product.description.slice(0, 78) + "..."}</p>
            <p className={style.category}>{product.category}</p>
            <p>Estoque:{product.rating.count}</p>
          </div>
        ))}
      </main>
    </>
  );
}
