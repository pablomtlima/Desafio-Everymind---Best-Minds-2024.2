import { useState, useEffect } from "react";
import { Table } from "./components/Table/Table";
import { api } from "./services/api";

import "./App.module.css"

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Erro ao buscar produtos", err);
    }
  }

  async function handleNewProduct() {
    try {
      await api.post("/products", {
        name,
        price,
        description,
      });
      await fetchProducts();
      resetForm();
    } catch (err) {
      console.error("Erro ao cadastrar produto", err);
    }
  }

  async function handleEditProduct() {
    if (editProduct) {
      try {
        await api.put("/products", {
          id: editProduct.id,
          name,
          price,
          description,
        });
        await fetchProducts();
        resetForm();
        setEditProduct(null);
      } catch (err) {
        console.error("Erro ao atualizar produto", err);
      }
    }
  }

  function startEditing(product) {
    setEditProduct(product);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
  }

  function resetForm() {
    setName("");
    setPrice("");
    setDescription("");
  }


  return (
    <>
      <main>
        <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
          placeholder="Nome do produto"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="price"
          placeholder="Preço"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description"
          placeholder="Descrição"
        />
        <button onClick={editProduct ? handleEditProduct : handleNewProduct}>
          {editProduct ? "Atualizar" : "Cadastrar"}
        </button>
        </div>
      <Table products={products} refreshProducts={fetchProducts} onEdit={startEditing} />
      </main>
    </>
  );
}

export default App;
