import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import { RowProduts } from "../RowProducts/RowProducts";

import { api } from "../../services/api";

export function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fecthProducts() {
      try {
        const response = await api.get("/products");
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("erro ao buscar produtos", err);
      }
    }
    fecthProducts();
  }, []);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome do Produto</th>
            <th>Preço</th>
            <th>Descriçao</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <RowProduts
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
