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

    const ideia = {
      id: Date.now(),
      texto: novaIdeia,
      feita: false
    };

    setIdeias((listaAtual) => [...listaAtual, ideia]);

    console.log(`Nova ideia criada: ${novaIdeia}`);

    setNovaIdeia("");
    setErro("");
  };

  function aoAlternarCheckbox(id) {
    setIdeias((atual) =>
      atual.map((ideia) => {
        if (ideia.id === id) {
          return {
            ...ideia,
            feita: !ideia.feita
          };
        }

        return ideia;
      })
    );
  };

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
        <button type="submit">Adicionar</button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <div>
        {ideias.map((ideia) => (
          <div key={ideia.id}>
            <input 
            type="checkbox"
            checked={ideia.feita}
            onChange={() => aoAlternarCheckbox(ideia.id)}
            />
            <span>{ideia.texto}</span>
            <button type="button">✕</button>
          </div>
        ))}
      </div>
    </>
  );
};