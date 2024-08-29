import styles from "./RowProducts.module.css";

export function RowProduts(props) {
  return (
    <>
      <tr className={styles.row}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.description}</td>
      </tr>
    </>
  );
}
