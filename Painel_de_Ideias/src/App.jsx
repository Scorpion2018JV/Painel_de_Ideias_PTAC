import { useState } from "react";

export default function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function Enviar (event){
    event.preventDefault();
    
    if (novaIdeia.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }
    console.log("Nova ideia criada.")
    console.log(novaIdeia)
  }

  return (
    <>
      <h1>Painel de Ideias</h1>
      <form onSubmit={Enviar}>
        <input 
          type="text"
          placeholder="Digite sua ideia" 
          value={novaIdeia} 
          onChange={(event) => {
            setNovaIdeia(event.target.value); 
            setErro("");
          }} 
        />
        <button>Adicionar</button>
      </form>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </>
  );
}