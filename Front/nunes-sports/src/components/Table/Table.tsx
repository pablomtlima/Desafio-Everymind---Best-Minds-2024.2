import styles from "./Table.module.css";

export function Table() {
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
      </table>
    </>
  );
}
