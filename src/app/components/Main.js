"use client"
import { useEffect,useState } from "react";
import Image from "next/image";
import style from "../page.module.css";
import Spinner from "./Spinner";


export default function Main() {
  const [listProduct, setProduct] = useState([]);
  const [listComplete, setlistComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      setlistComplete(data);
    }
    getProduct();
  
}, []);

  const orderAz=() =>{
  let listAux = [...listProduct].sort((a, b) =>
    a.title.localeCompare(b.title));
    setProduct(listAux)
  }

  const Search = (text) => {
       setProduct(listAux);

       if(text.trim() == ""){
        setlistProduct(listComplete);
        return
       }
       const newList = listProduct.filter((product) => 
        product.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim())
      );
      setProduct(newList);
  }

  if(listComplete[0] == null) {
    return(
      <main className={style.main}>
        <Spinner />
      </main>
    )
  }

  
 

  const orderKa=() =>{
    let listAux =[...listProduct].sort((a,c)=>
    a.title.localeCompare(c.title) );
    listAux = listAux.reverse();
    setProduct(listProduct);
  }
  const ordePZa=() =>{
    const listAux =[...listProduct].sort((a,b)=> a.price.a-b(b.price) );
    setProduct(listAux)

  }
  return (
    <>
      <div className={"styles.filter"}>
        <div>
          <input type="text" value={TextSearch}
          placeholder="Pesquise um produto"
          onChange={(event) =>Search(event.target.value)} />


        <button onClick={ordePZa}>Az</button>
        <button onClick={orderAz}>Ka</button>
        <button onClick={orderKa}>ordePZa</button>
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
