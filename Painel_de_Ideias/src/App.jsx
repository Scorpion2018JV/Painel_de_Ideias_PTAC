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

  function alternarEstadoIdeia(id) {
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
      <form onSubmit={enviarIdeia} className="formulario">
        <input 
            type="text"
            placeholder="Digite sua ideia"
            value={novaIdeia} 
            onChange={(event) => {
              setNovaIdeia(event.target.value); 
              setErro("");
            }}
        />
        <button type="submit" disabled={novaIdeia.length > 80} className="botao-adicionar">Adicionar</button>

        <p>{caracteresRestantes} caracteres restantes</p>
      </form>

      {erro && <p className="mensagem-erro">{erro}</p>}

      <button type="button" onClick={limparTudo} className="botao-limpar">Limpar tudo</button>

      <div className="lista-ideias">
        {ideias.map((ideia) => (
          <div key={ideia.id} className="ideia">
            <input 
              type="checkbox"
              checked={ideia.feita}
              onChange={() => alternarEstadoIdeia(ideia.id)}
            />

            <span className={ideia.feita ? "feita" : ""}>{ideia.texto}</span>
            <span className="data">{ideia.data}</span>

            <button type="button" onClick={() => removerIdeia(ideia.id)} className="botao-remover">✕</button>
          </div>
        ))}
      </div>

      <footer className="rodape">
        <p>{fraseContador}</p>
      </footer>
    </>
  );
};