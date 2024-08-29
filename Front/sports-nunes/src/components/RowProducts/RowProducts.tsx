import { GoXCircle, GoPencil } from "react-icons/go";
import styles from "./RowProducts.module.css"; 
import { api } from "../../services/api";
export function RowProduts({ id, name, price, description, onDelete, onEdit }) {
  async function handleDelete() {
    try {
      await api.delete(`/products/${id}`);
      if (onDelete) onDelete(); 
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
    }
  }

  return (
    <>
      <tr id="row" className={styles.row}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{"R$ "+ price}</td>
        <td>{description}</td>
        <td className={styles.icons}>
          <GoXCircle className={styles.close} onClick={handleDelete} />
          <GoPencil className={styles.edit}
            className={styles.edit}
            onClick={() => onEdit({ id, name, price, description })}
          />
        </td>
      </tr>
    </>
  );
}
