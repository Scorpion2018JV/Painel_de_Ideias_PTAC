import { useState } from "react";

export default function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function enviarIdeia(event){
    event.preventDefault();
    
    if (novaIdeia.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    };

    const ideia = {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false,
      data: new Date().toLocaleDateString("pt-BR")
    };

    setIdeias((listaAtual) => [...listaAtual, ideia]);

    console.log(`Nova ideia criada: ${novaIdeia}`);

    setNovaIdeia("");
    setErro("");
  }

  function aoAlternarCheckbox(id) {
    setIdeias((listaAtual) => listaAtual.map((ideia) => 
      ideia.id === id ? { ...ideia, feita: !ideia.feita } : ideia)
    );
  }

  function removerIdeia(id) {
    setIdeias((listaAtual) => {
      return listaAtual.filter((ideia) => ideia.id !== id);
    });
  }

  function limparTudo() {
    setIdeias([]);
  }

  const ideiasConcluidas = ideias.filter((ideia) => ideia.feita).length;
  const fraseContador = `${ideias.length} ideia(s) no painel · ${ideiasConcluidas} concluída(s)`;

  let caracteresRestantes = 80 - novaIdeia.length;

  if (caracteresRestantes < 0) {
    caracteresRestantes = 0;
  }

  return (
    <>
      <h1>Painel de Ideias</h1>
      <h3>Registre aqui suas ideias!</h3>
      <form onSubmit={enviarIdeia}>
        <input 
            type="text"
            placeholder="Digite sua ideia"
            value={novaIdeia} 
            onChange={(event) => {
              setNovaIdeia(event.target.value); 
              setErro("");
            }}
        />
        <button type="submit" disabled={novaIdeia.length > 80}>Adicionar</button>

        <p>{caracteresRestantes} caracteres restantes</p>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <button type="button" onClick={limparTudo}>Limpar tudo</button>

      <div>
        {ideias.map((ideia) => (
          <div key={ideia.id}>
            <input 
              type="checkbox"
              checked={ideia.feita}
              onChange={() => aoAlternarCheckbox(ideia.id)}
            />
            <span className={ideia.feita ? "feita" : ""}>{ideia.texto}</span>
            <span> - {ideia.data}</span>
            <button type="button" onClick={() => removerIdeia(ideia.id)}>✕</button>
          </div>
        ))}
      </div>

      <footer>
        <p>{fraseContador}</p>
      </footer>
    </>
  );
};