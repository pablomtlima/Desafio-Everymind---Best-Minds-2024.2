import { useState } from "react";

import { Table } from "./components/Table/Table";
import { api } from "./services/api";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  async function handleNewProduct() {
    await api.post("/products", {
      name,
      price,
      description,
    });
  }

  return (
    <>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          className="name"
          placeholder="Nome do produto"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="price"
          placeholder="Preço"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="desscription"
          placeholder="Descrição"
        />
        <button onClick={handleNewProduct}>Cadastrar</button>
      </div>
      <Table />
    </>
  );
}

export default App;
