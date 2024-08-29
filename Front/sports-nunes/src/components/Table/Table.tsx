import { useEffect } from "react";
import styles from "./Table.module.css";
import { RowProduts } from "../RowProducts/RowProducts";

export function Table({ products, refreshProducts, onEdit }) {
  useEffect(() => {
    refreshProducts(); 
  }, [refreshProducts]);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className="id">Código</th>
            <th className="name">Nome do Produto</th>
            <th className="price">Preço</th>
            <th className="description">Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <RowProduts
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              onDelete={refreshProducts}
              onEdit={onEdit} 
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
